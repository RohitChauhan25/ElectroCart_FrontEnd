import { Menus } from 'Constant/FooterData'
import { FaInstagram, FaLinkedin, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Contact, Container, LogoSection, Title, Menu, SocialIocne, Icon, Wrapper, CopyRight } from 'Styles/Footer'
import { LogoWrapper } from 'Styles/Header'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { OpenCart } from 'Store/slice/cartSlice'
import { RootState } from 'Store/store'

function Footer() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { opencart } = useSelector((state: RootState) => state.CartReducer)

  const scrollToTop = (duration: number) => {
    const scrollStep = -window.scrollY / (duration / 15)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15)
  }
  const handleClick = (type: string) => {
    if (type === 'Home') {
      scrollToTop(1000)
    } else if (type === 'Cart') {
      dispatch(OpenCart(!opencart))
    } else {
      navigate('/products')
    }
  }

  return (
    <Container>
      <Wrapper>
        <LogoSection>
          <LogoWrapper onClick={() => navigate('/')}>
            <b style={{ color: 'red' }}>E</b>l <b>e</b>c <b>t</b>r <b>o</b>
            <b style={{ color: 'red' }}>C</b> a <b>r</b>t{/* ElectroCart */}
          </LogoWrapper>
          <SocialIocne>
            <Icon key="FaInstagram">
              <FaInstagram color="black" />
            </Icon>
            <Icon key="FaLinkedin">
              <FaLinkedin color="black" />
            </Icon>
            <Icon key="FaFacebookF">
              <FaFacebookF color="black" />
            </Icon>
            <Icon key="FaTwitter">
              <FaTwitter color="black" />
            </Icon>
            <Icon key="FaYoutube">
              <FaYoutube color="black" />
            </Icon>
          </SocialIocne>
        </LogoSection>
        <Menu>
          <b style={{ fontSize: '20px' }}>Menus</b>
          {Menus?.map((item) => (
            <Title key={item?.title} onClick={() => handleClick(item.title)}>
              {item?.title}
            </Title>
          ))}
        </Menu>
        <Contact>
          <b style={{ fontSize: '20px' }}>Contact</b>
          <div>Phone : +91-86301-00838</div>
          <div>Email : ronychauhan1@gmail.com</div>
          <div>Address : Wits Innovation Lab City Heart Kharar</div>
        </Contact>
      </Wrapper>
      <CopyRight>© Copyright 2023 Rohit Chauhan - All Rights Reserved</CopyRight>
    </Container>
  )
}

export default Footer
