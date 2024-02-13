import { Brands, Prices, discountRange } from 'Constant/priceData'
import {
  Container,
  TopSection,
  FilterWrapper,
  Wrapper,
  Title,
  FilterContainer,
  FilterBy,
  SortByWrap,
  BottomSection,
  CartWrapper,
  Imagwrap,
  CartImage,
  ItemDetail,
  Name,
  PriceWrapper,
  Off,
  ShopButton,
  Playback,
  ItemWrapper,
  Price,
  Rating,
  Tab,
  Category,
  Proceed,
  ApplyFilter,
  SideBarContainer,
  NoDataWrap,
  ReadMore,
  PaginationWrap,
  FilterTabs,
  Clear,
} from 'Styles/Products'
import { Checkbox, Pagination, Radio, RadioChangeEvent, Rate, Select, Space } from 'antd'
import { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'
import { SortByData } from 'Constant/constatntData'
import { RxCross2 } from 'react-icons/rx'
import usePost from 'hooks/usePost'
import { useNavigate, useParams } from 'react-router-dom'
import { AddToCart, AddToCartId, OpenCart } from 'Store/slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'Store/store'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import NoData from 'Assets/svg/NoData'
// import { toggleLoader } from 'Store/slice/loader'
interface FilterType {
  brands: string[]
  price: string[]
  discountPercentage: string
  page: number
}

const Products = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [sortBy, setSortBy] = useState('relevance')
  const [isShowingAllBrands, setIsShowingAllBrands] = useState(false)
  const [pagination, setpagination] = useState<any>()
  const [filterBy, setFilterBy] = useState<FilterType>({
    brands: [],
    price: [],
    discountPercentage: '',
    page: 1,
  })
  const { cartId, opencart } = useSelector((state: RootState) => state.CartReducer)
  const dispatch = useDispatch()
  const params = useParams()
  const path = window.location.pathname
  const navigate = useNavigate()
  const { mutateAsync } = usePost()

  const fetchFiterProducts = async () => {
    try {
      const payload: any = {
        sortBy: sortBy,
      }
      if (params?.category) {
        payload.category = params?.category
      }

      if (filterBy?.brands?.length > 0 || params?.brand) {
        payload.brands = filterBy?.brands?.length > 0 ? filterBy?.brands : [params?.brand]
      }

      if (filterBy?.discountPercentage) {
        payload.discount = filterBy?.discountPercentage
      }

      if (filterBy?.price?.length > 0) {
        payload.price = filterBy?.price
      }

      if (filterBy?.page) {
        payload.page = filterBy?.page
      }

      const response: any = await mutateAsync({
        url: '/products',
        payload,
      })

      if (response) {
        setProducts(response.data?.products)
        setpagination(response?.data?.pagination)
      }
    } catch (error) {
      return error
    }
  }

  // Function to toggle between showing limited brands and all brands
  const toggleBrandDisplay = () => {
    setIsShowingAllBrands(!isShowingAllBrands)
  }

  const handleRemoveItem = (value: string) => {
    setFilterBy({ ...filterBy, brands: filterBy?.brands?.filter((item) => item !== value) })
  }
  const handleRemovePrice = (value: string) => {
    setFilterBy({ ...filterBy, brands: filterBy?.price?.filter((item) => item !== value) })
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleDiscount = (e: RadioChangeEvent) => {
    if (e.target.checked) {
      setFilterBy({
        ...filterBy,
        discountPercentage: e.target.value,
      })
    } else {
      setFilterBy({
        ...filterBy,
        discountPercentage: '',
      })
    }
  }

  const handleBrand = (e: CheckboxChangeEvent) => {
    const value = e.target.value
    if (e.target.checked) {
      setFilterBy({
        ...filterBy,
        brands: [...filterBy.brands, value],
      })
    } else {
      setFilterBy({
        ...filterBy,
        brands: filterBy.brands.filter((brand: string) => brand !== value),
      })
    }
  }
  const handlePrice = (e: RadioChangeEvent) => {
    if (e.target.checked) {
      setFilterBy({
        ...filterBy,
        price: [...filterBy.price, e.target.value],
      })
    } else {
      setFilterBy({
        ...filterBy,
        price: filterBy?.price.filter((value: string) => value !== e.target.value),
      })
    }
  }

  const handleAdd = (item: any) => {
    dispatch(AddToCart(item))
    dispatch(AddToCartId(item.id))
  }

  useEffect(() => {
    fetchFiterProducts()
  }, [path, filterBy, sortBy])

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isSidebarOpen])

  const handleProceed = () => {
    dispatch(OpenCart(!opencart))
  }

  const handlePagination = (e: any) => {
    setFilterBy({ ...filterBy, page: e })
  }

  return (
    <Container>
      <TopSection>
        <FilterWrapper onClick={toggleSidebar}>
          <FaFilter /> Filter by <IoMdArrowDropdown size={20} cursor={'pointer'} />
        </FilterWrapper>

        <FilterTabs>
          {filterBy?.brands?.length > 0 && (
            <Category>
              <b>Brands:</b>
              {filterBy?.brands?.map((item: any) => (
                <Tab key={item?.id}>
                  <span>{item}</span>
                  <RxCross2 onClick={() => handleRemoveItem(item)} cursor={'pointer'} size={12} />
                </Tab>
              ))}
              <Clear onClick={() => setFilterBy({ ...filterBy, brands: [] })}>Clear all</Clear>
            </Category>
          )}

          {filterBy?.price?.length > 0 && (
            <Category>
              <b>Price:</b>
              {filterBy?.price?.map((item: any) => (
                <Tab key={item?.id}>
                  <span>{item}</span>
                  <RxCross2 onClick={() => handleRemovePrice(item)} cursor={'pointer'} size={12} />
                </Tab>
              ))}
              <Clear onClick={() => setFilterBy({ ...filterBy, price: [] })}>Clear all</Clear>
            </Category>
          )}
          {filterBy?.discountPercentage && (
            <Category>
              <b>Discount:</b>
              <Tab>
                <span>{filterBy?.discountPercentage} % and above</span>
                <RxCross2
                  onClick={() => setFilterBy({ ...filterBy, discountPercentage: '' })}
                  cursor={'pointer'}
                  size={12}
                />
              </Tab>
            </Category>
          )}
        </FilterTabs>

        <SortByWrap>
          Sort by :
          <Select
            options={SortByData}
            defaultValue="relevance"
            placement="bottomRight"
            onChange={(value: string) => setSortBy(value)}
            className="customeClass"
            bordered={false}
            dropdownStyle={{ width: '200px', right: 35 }}
            suffixIcon={<IoMdArrowDropdown size={20} cursor={'pointer'} color="black" />}
          />
        </SortByWrap>
      </TopSection>
      <BottomSection>
        {products?.length > 0 ? (
          <ItemWrapper>
            {products?.map((item: any, index) => {
              const price = Math.floor(item?.price - (item?.price * item?.discountPercentage) / 100)
              return (
                <CartWrapper key={index}>
                  <Imagwrap onClick={() => navigate(`/detail/${item?.category}/${item?.id}`)}>
                    <CartImage src={item?.thumbnail} />
                  </Imagwrap>
                  <ItemDetail>
                    <Name>{item?.title}</Name>
                    <PriceWrapper>
                      <div>
                        <Price>
                          {price}
                          <span>
                            <del>
                              Rs.
                              {item?.price}
                            </del>
                          </span>
                        </Price>
                        <Off>{item?.discountPercentage}%off</Off>
                      </div>
                      <Rating>
                        <Rate count={1} disabled defaultValue={1} />
                        {item?.rating}
                      </Rating>
                    </PriceWrapper>
                    {cartId?.includes(item.id as string) ? (
                      <Proceed onClick={handleProceed}>Proceed To Cart</Proceed>
                    ) : (
                      <ShopButton onClick={() => handleAdd(item)}> Add To Cart</ShopButton>
                    )}
                    <Playback>{item?.playback}</Playback>
                  </ItemDetail>
                </CartWrapper>
              )
            })}
          </ItemWrapper>
        ) : (
          <NoDataWrap>
            <NoData />
            <b>No data found.</b>
          </NoDataWrap>
        )}
        <PaginationWrap>
          {pagination && (
            <Pagination
              current={filterBy?.page}
              defaultCurrent={1}
              total={pagination?.totalCount}
              pageSize={10}
              onChange={handlePagination}
            />
          )}
        </PaginationWrap>
      </BottomSection>

      <SideBarContainer className={` ${isSidebarOpen ? 'openFilter' : ''}`}>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <button onClick={toggleSidebar}>
            <MdCancel size={20} />
          </button>
          <Wrapper>
            <FilterBy>
              <FaFilter />
              Filter By
            </FilterBy>
            <Title>BRAND</Title>
            <FilterContainer>
              {Brands?.map((item: any, index: number) =>
                (!isShowingAllBrands && index < 5) || isShowingAllBrands ? (
                  <Checkbox
                    value={item?.value}
                    key={index}
                    onChange={handleBrand}
                    checked={filterBy?.brands?.includes(item.value)}
                  >
                    {item.label}
                  </Checkbox>
                ) : null,
              )}
              {<ReadMore onClick={toggleBrandDisplay}> {isShowingAllBrands ? 'Read less' : 'Read more'}</ReadMore>}
            </FilterContainer>

            <Title>PRICE</Title>
            <FilterContainer>
              {Prices?.map((item: any, index: number) => (
                <Checkbox
                  value={item?.value}
                  key={index}
                  onChange={handlePrice}
                  checked={filterBy?.price?.includes(item.value)}
                >
                  Rs. {item.value}
                </Checkbox>
              ))}
            </FilterContainer>

            <Title>DISCOUNTRANGE</Title>
            <FilterContainer>
              {discountRange?.map((item: any, index: number) => (
                <Radio.Group onChange={handleDiscount} key={index} value={filterBy.discountPercentage}>
                  <Space direction="vertical" key={index}>
                    <Radio value={item?.value} key={index}>
                      {item?.value}% and above
                    </Radio>
                  </Space>
                </Radio.Group>
              ))}
            </FilterContainer>
          </Wrapper>
          <ApplyFilter onClick={() => setFilterBy({ brands: [], price: [], discountPercentage: '', page: 1 })}>
            Reset
          </ApplyFilter>
        </div>
      </SideBarContainer>
    </Container>
  )
}

export default Products
