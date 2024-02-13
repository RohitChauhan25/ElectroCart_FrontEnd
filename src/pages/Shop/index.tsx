import { useEffect, useId, useState } from 'react'
import {
  Container,
  ItemContainer,
  ItemWrapper,
  Image,
  FilterWrapper,
  Brand,
  Title,
  Price,
  Discount,
  Off,
  Rating,
  ImageWrapper,
  WishList,
  BrandWrapper,
  More,
  ProductsContainer,
  Top,
  SortByWrapper,
  Hedding,
  TitleWrapper,
} from 'Styles/Shop'
import useGet from 'hooks/useGet'
import star from 'Assets/images/start.png'
import { AiOutlineHeart } from 'react-icons/ai'
import { Checkbox, Radio, RadioChangeEvent, Select, Space } from 'antd'
import { Prices, discountRange } from 'Constant/priceData'
import Header from 'Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleLoader } from 'Store/slice/loader'
import { SortByData } from 'Constant/constatntData'
import usePost from 'hooks/usePost'

interface FilterType {
  brands: string[]
  price: string[]
  discountPercentage: string
}

function Shop() {
  const [brands, setBrands] = useState([])
  const [products, setProducts] = useState([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [filterBy, setFilterBy] = useState<FilterType>({
    brands: [],
    price: [],
    discountPercentage: '',
  })
  const dispatch = useDispatch()
  const { mutateAsync } = usePost()
  const id = useId()
  const params = useParams()
  const { subcategory } = params
  const { refetch, data, isLoading } = useGet({
    key: `product${id}`,
    url: `/products?for=${params.for}${params.type && params.type !== 'all' ? `&type=${params.type}` : ''}${
      subcategory && subcategory != 'all' ? `&subCategory=${subcategory}` : ''
    }${params.category ? `&category=${params.category}` : ''}`,
  })

  const fetchBrand = async () => {
    try {
      const payload: any = {}
      if (params?.type && params.type !== 'all') payload.type = params?.type
      if (params.category && params.type !== 'all') {
        payload.category = params?.category
      }

      if (params.subcategory) payload.subcategory = params?.subcategory
      if (params.for) payload.for = [params?.for]

      const response: any = await mutateAsync({
        url: '/brands',
        payload,
      })

      if (response) {
        setBrands(response.data)
      }
    } catch (error) {
      return error
    }
  }

  const fetchFiterProducts = async () => {
    try {
      const payload: any = {}
      if (params?.type && params?.type !== 'all') payload.type = params?.type
      if (params.category && params?.type !== 'all') {
        payload.category = params?.category
      }

      if (params?.subcategory && params?.type !== 'all') {
        payload.subcategory = params?.subcategory
      }

      if (params?.for) payload.for = [params?.for]
      if (filterBy?.brands?.length > 0) payload.brands = filterBy?.brands
      if (filterBy?.price?.length > 0) payload.price = filterBy?.price
      if (filterBy?.discountPercentage) payload.discountPercentage = filterBy?.discountPercentage
      const response: any = await mutateAsync({
        url: '/product/filter',
        payload,
      })

      if (response) {
        setProducts(response.data)
      }
    } catch (error) {
      return error
    }
  }

  if (isLoading) {
    dispatch(toggleLoader(true))
  }

  useEffect(() => {
    fetchBrand()
  }, [])

  useEffect(() => {
    if (data?.data) dispatch(toggleLoader(false))
    setProducts(data?.data)
  }, [data])

  useEffect(() => {
    if (filterBy?.brands?.length > 0 || filterBy?.discountPercentage || filterBy?.price?.length > 0) {
      fetchFiterProducts()
    } else {
      refetch()
    }
  }, [filterBy])

  const onChange = (e: RadioChangeEvent) => {
    if (e.target.checked) {
      setFilterBy({
        ...filterBy,
        brands: [...filterBy.brands, e.target.value],
      })
      setSelectedBrands([...selectedBrands, e.target.value])
    } else {
      setSelectedBrands(selectedBrands?.filter((brand: string) => brand !== e.target.value))
      setFilterBy({
        ...filterBy,
        brands: filterBy?.brands.filter((brand: string) => brand !== e.target.value),
      })
    }
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

  return (
    <>
      <Header />
      <Container>
        <Top>
          <Hedding>Filters</Hedding>
          <SortByWrapper>
            <span> Sort By:</span>
            <Select options={SortByData} defaultValue="relevance" className="customeClass" bordered={false} />
          </SortByWrapper>
        </Top>
        <ProductsContainer>
          <FilterWrapper>
            <TitleWrapper>BRAND</TitleWrapper>
            <BrandWrapper>
              {brands?.length > 0 &&
                brands?.map(
                  (item: any, index) =>
                    index < 8 && (
                      <Checkbox value={item?.name} onChange={onChange} key={index}>
                        {item.name}
                      </Checkbox>
                    ),
                )}

              {brands?.length - 8 > 0 && <More>+{brands?.length - 8} more</More>}
            </BrandWrapper>

            <TitleWrapper>PRICE</TitleWrapper>
            <BrandWrapper>
              {Prices?.map((item: any, index: number) => (
                <Checkbox value={item?.value} key={index} onChange={handlePrice}>
                  Rs. {item.value}
                </Checkbox>
              ))}
            </BrandWrapper>

            <TitleWrapper>DISCOUNTRANGE</TitleWrapper>
            <BrandWrapper>
              {discountRange?.map((item: any, index: number) => (
                <Radio.Group onChange={handleDiscount} key={index} value={filterBy.discountPercentage}>
                  <Space direction="vertical" key={index}>
                    <Radio value={item?.value} key={index}>
                      {item?.value}% and above
                    </Radio>
                  </Space>
                </Radio.Group>
              ))}
            </BrandWrapper>
          </FilterWrapper>
          <ItemContainer>
            {products?.length > 0 &&
              products?.map((item: any) => {
                const price = Math.floor(item?.price - (item?.price * item?.discountPercentage) / 100)
                return (
                  <ItemWrapper
                    key={item?.id}
                    href={`/detail/${item.category}/${item.subCategory}/${item.for}/${item.id}`}
                    target="_blank"
                  >
                    <ImageWrapper>
                      <Image src={item?.thumbnail} />
                      <Rating>
                        {item.rating}
                        <img src={star} alt="rating" /> | 26
                      </Rating>
                    </ImageWrapper>
                    <WishList className="child">
                      <button>
                        <AiOutlineHeart height={50} width={50} />
                        wishlist
                      </button>
                    </WishList>
                    <Brand>{item?.brand}</Brand>
                    <Title>{item?.title}</Title>
                    <Price>
                      Rs. {price}
                      <Discount>
                        <del>
                          Rs.
                          {item?.price}
                        </del>
                        <Off>
                          ({item?.discountPercentage}
                          %OFF)
                        </Off>
                      </Discount>
                    </Price>
                  </ItemWrapper>
                )
              })}
          </ItemContainer>
        </ProductsContainer>
      </Container>
    </>
  )
}

export default Shop
