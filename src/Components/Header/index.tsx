import { BiUser } from 'react-icons/bi'
import { BsHandbag } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { Dropdown, Menu, Row } from 'antd'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {
  WishList,
  Container,
  NavContainer,
  LogoWrapper,
  CartWrapper,
  ResponsiveMenu,
  FaButton,
  // Close,
  NavItem,
  NavList,
  NavTitle,
  CartTitle,
  ItemWrapper,
  ItemWrap,
  Image,
  Details,
  Right,
  ItemTitle,
  Quantity,
  Inc,
  Dec,
  ConfirmOrder,
  AmountWrap,
  Amount,
  Tax,
  PaymetDetail,
  Col,
  Col2,
  Seprate,
  Address,
  AddressDetails,
  Text,
  ChangeButton,
  Pin,
  Area,
  Remove,
  Count,
  CartPage,
  NoItems,
  StartButton,
  LoginButton,
  UserWrap,
  Name,
  SignButton,
  ButtonWrap,
} from '../../Styles/Header'
import { MdCancel } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'Store/store'
import { DecreaseQuantity, IncreseQuantity, OpenCart, RemoveFromCart } from 'Store/slice/cartSlice'
import NOItems from 'Assets/svg/noItems'
import { items2, items3, items, items4 } from 'Constant/headerData'
import ApologyModal from 'Components/Modal/ApologyModal'
import { toast } from 'react-toastify'
import { AddUser } from 'Store/slice/userSlice'
import { loadStripe } from '@stripe/stripe-js/pure'

function Header() {
  // const [open, setOpen] = useState(false)
  const [openCheckout, setCheckout] = useState(false)
  const navigate = useNavigate()
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const { cart, opencart } = useSelector((state: RootState) => state.CartReducer)
  const { user } = useSelector((state: RootState) => state.UserReducer)
  const [cartToatl, setTotal] = useState(0)
  const path = window.location.pathname
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const toggleSidebar = () => {
    dispatch(OpenCart(!opencart))
  }

  const handleCancel = (item: any) => {
    dispatch(RemoveFromCart(item?.id))
  }

  useEffect(() => {
    if (opencart || collapsed) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [opencart, collapsed])

  const handleQuantity = (type: string, item: any) => {
    type === 'increment' ? dispatch(IncreseQuantity(item)) : item.quantity > 1 && dispatch(DecreaseQuantity(item))
  }

  useEffect(() => {
    if (cart?.length > 0) {
      let total = 0
      cart.map((item: any) => {
        const price = Math.floor(
          item?.price * item.quantity - (item?.price * item.quantity * item?.discountPercentage) / 100,
        )
        total += price
      })
      setTotal(total)
    }
  }, [cart])

  const handleConfirmOrder = async () => {
    if (user?.name) {
      const stripe: any = await loadStripe(
        'pk_test_51JvwvmSGr3DzIFbitSPJkFGwU6n7xuqX8labFSmxTZoU8Syh17SGFFLo3p9uLzC6vzwgJM6I50dWWfzfs3TnnQcw00M5DS7GfS',
      )
      const body = {
        products: cart,
      }

      const headers: any = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      }
      const response = await fetch('https://electrocart-backend.onrender.com/api/create-checkout-session', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      })

      const session = await response.json()

      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      })

      return result
    } else {
      toast.warning('Please login')
      dispatch(OpenCart(!opencart))
      navigate('/login')
    }
  }

  const handleLogout = () => {
    dispatch(AddUser(null))
    localStorage.clear()
    navigate('/login')
  }

  return (
    <Container className={path === '/' ? '' : 'white-back'}>
      <LogoWrapper onClick={() => navigate('/')}>
        <b style={{ color: 'red' }}>E</b>l <b>e</b>c <b>t</b>r <b>o</b>
        <b style={{ color: 'red' }}>C</b> a <b>r</b>t{/* ElectroCart */}
      </LogoWrapper>

      <NavContainer>
        <NavList>
          <NavItem>
            <Dropdown menu={{ items }} placement="bottom">
              <NavTitle>Airbuds</NavTitle>
            </Dropdown>
          </NavItem>
          <NavItem>
            <Dropdown menu={{ items: items2 }} placement="bottom">
              <NavTitle>SmartWatchs</NavTitle>
            </Dropdown>
          </NavItem>
          <NavItem>
            <Dropdown menu={{ items: items3 }} placement="bottom">
              <NavTitle>HeadPhones</NavTitle>
            </Dropdown>
          </NavItem>
          <NavItem onClick={() => navigate('/products')}>
            <NavTitle>Shope</NavTitle>
          </NavItem>
        </NavList>
      </NavContainer>

      <ResponsiveMenu className={collapsed ? 'colapse' : ''}>
        <Remove onClick={() => toggleCollapsed()}>
          <RxCross2 />
        </Remove>
        <Menu mode="inline" style={{ width: 256, marginTop: '30px' }} items={items4} />
      </ResponsiveMenu>
      <FaButton onClick={() => toggleCollapsed()}>
        <FaBars />
      </FaButton>

      <CartWrapper>
        <WishList className="dropdown">
          <BiUser size={30} className="dropbtn" />
          <div className="dropdown-content">
            {user ? (
              <UserWrap>
                <Name> {user.name}</Name>
                <LoginButton onClick={handleLogout}>
                  <span>Log out</span>
                </LoginButton>
              </UserWrap>
            ) : (
              <LoginButton onClick={() => navigate('/login')}>
                <span>Login</span>
              </LoginButton>
            )}
          </div>
        </WishList>

        <WishList onClick={toggleSidebar}>
          <BsHandbag size={28} />
          {cart?.length > 0 && <Count>{cart?.length}</Count>}
        </WishList>
      </CartWrapper>

      <CartPage className={`${opencart ? 'openCartPage' : ''}`}>
        <div className={`sidebar ${opencart ? 'open' : ''}`}>
          <CartTitle>Your Cart</CartTitle>
          <button onClick={toggleSidebar}>
            <MdCancel size={20} />
          </button>

          {cart?.length > 0 ? (
            <>
              <Address>
                {user ? (
                  <AddressDetails>
                    <Text>
                      <Pin>
                        Delivering to: <b> 140301</b>
                      </Pin>
                      <Area>darpan city Mohali </Area>
                    </Text>
                    <ChangeButton>Change</ChangeButton>
                  </AddressDetails>
                ) : (
                  <ButtonWrap
                    onClick={() => {
                      dispatch(OpenCart(!opencart))
                      navigate('/login')
                    }}
                  >
                    <SignButton>Sign In</SignButton>
                  </ButtonWrap>
                )}
              </Address>
              <ItemWrapper>
                {cart?.map((item: any, index) => {
                  const price = Math.floor(
                    item?.price * item?.quantity - (item?.price * item?.quantity * item?.discountPercentage) / 100,
                  )
                  return (
                    <ItemWrap key={index}>
                      <Remove onClick={() => handleCancel(item)}>
                        <RxCross2 />
                      </Remove>
                      <Details>
                        <Image src={item?.thumbnail} alt="" />
                        <Right>
                          <ItemTitle>{item?.title}</ItemTitle>
                          <ItemTitle>₹ {price}</ItemTitle>
                          <Quantity>
                            <Inc onClick={() => handleQuantity('decrement', item)}> - </Inc>
                            {item?.quantity}
                            <Dec onClick={() => handleQuantity('increment', item)}>+</Dec>
                          </Quantity>
                        </Right>
                      </Details>
                    </ItemWrap>
                  )
                })}
              </ItemWrapper>
              <PaymetDetail className={`${isPaymentOpen ? 'openPayment' : ''}`}>
                <Row>
                  <Col>Cart Total:</Col>
                  <Col2>₹{cartToatl}</Col2>
                </Row>
                <Row>
                  <Col>Shipping:</Col>
                  <Col2>FREE</Col2>
                </Row>
                <Seprate />
                <Row>
                  <Col>To Pay:</Col>
                  <Col2>₹{cartToatl} </Col2>
                </Row>
              </PaymetDetail>
              <AmountWrap>
                <Amount>
                  ₹ {cartToatl}
                  <Tax onClick={() => setIsPaymentOpen(!isPaymentOpen)}>
                    inclusive all texes <MdKeyboardArrowDown size={20} cursor={'pointer'} />
                  </Tax>
                </Amount>
                <ConfirmOrder onClick={handleConfirmOrder}>Confirm Order</ConfirmOrder>
              </AmountWrap>
            </>
          ) : (
            <NoItems>
              <NOItems />
              <b>Your cart is feeling lonely</b>

              <StartButton
                onClick={() => {
                  dispatch(OpenCart(!opencart))
                  navigate('/products')
                }}
              >
                Start Shopping
              </StartButton>
            </NoItems>
          )}
        </div>
      </CartPage>
      {openCheckout && <ApologyModal setCheckout={setCheckout} />}
    </Container>
  )
}

export default Header
