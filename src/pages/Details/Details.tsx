import { Navigation, FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import swiper from 'swiper'
import {
  Container,
  ImageContainer,
  DetailsContainer,
  Title,
  Rating,
  PriceWrapper,
  Discount,
  Texes,
  ButtonWrapper,
  AddToCartButton,
  ProductWrapper,
  BigImage,
  ThumbImage,
  Description,
  Delevery,
  DeleveryOptions,
  Similar,
} from 'Styles/Details'
import { useEffect, useState } from 'react'
import { BsHandbag } from 'react-icons/bs'
import { CiDeliveryTruck } from 'react-icons/ci'
import useGet from 'hooks/useGet'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { toggleLoader } from 'Store/slice/loader'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Rate } from 'antd'
import { AddToCart, AddToCartId, OpenCart } from 'Store/slice/cartSlice'
import usePost from 'hooks/usePost'
import {
  CartImage,
  CartWrapper,
  Imagwrap,
  ItemDetail,
  ItemWrapper,
  Name,
  Off,
  Playback,
  Price,
  PriceWrapper as PriceWrap,
  Rating as ProdRating,
  Proceed,
  ShopButton,
} from 'Styles/Products'
import { RootState } from 'Store/store'

function Details() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [similarProducts, setSimilarProducts] = useState([])
  const { mutateAsync } = usePost()
  const { id } = useParams()
  const { cartId, opencart } = useSelector((state: RootState) => state.CartReducer)
  const [Product, setProduct] = useState<any>()
  const [thumbsSwiper, setThumbsSwiper] = useState<swiper | null>(null)
  const { refetch: refetchProduct, data: productData } = useGet({
    key: `singleProduct`,
    url: `/product/${id}`,
  })

  const fetchFiterProducts = async () => {
    try {
      const payload: any = {}
      if (Product?.category) {
        payload.category = Product?.category
      }

      const response: any = await mutateAsync({
        url: '/products',
        payload,
      })

      if (response) {
        setSimilarProducts(response.data?.products)
      }
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    if (id) {
      setProduct(null)
      refetchProduct()
    }
  }, [id])

  useEffect(() => {
    if (productData) {
      setProduct(productData?.data)
    }
  }, [productData])

  useEffect(() => {
    fetchFiterProducts()
  }, [Product])

  useEffect(() => {
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(0) // Slide to the first image
    }
  }, [thumbsSwiper])

  const handleProceed = () => {
    dispatch(OpenCart(!opencart))
  }
  const handleAdd = (item: any) => {
    dispatch(AddToCart(item))
    dispatch(AddToCartId(item.id))
  }

  return (
    <Container>
      <ProductWrapper>
        <ImageContainer>
          <ThumbImage>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop
              spaceBetween={10}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {Product?.images?.map((item: any) => (
                <SwiperSlide key={item}>
                  <img src={item} loading="lazy" />
                </SwiperSlide>
              ))}
            </Swiper>
          </ThumbImage>

          <BigImage>
            <Swiper
              loop
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {Product?.images?.map((item: string) => (
                <SwiperSlide key={item}>
                  <img src={item} loading="lazy" />
                </SwiperSlide>
              ))}
            </Swiper>
          </BigImage>
        </ImageContainer>
        {Product && (
          <DetailsContainer>
            <Title>{Product?.title}</Title>
            <Description>{Product?.description}</Description>
            <Rating>
              {Product?.rating} <Rate count={1} disabled defaultValue={1} />
              <span>186 Ratings</span>
            </Rating>
            <PriceWrapper>
              Rs.
              {Math.floor(Product?.price - (Product?.price * Product?.discountPercentage) / 100)}
              <span>
                MRP
                <del>
                  Rs.
                  {Product?.price}
                </del>
              </span>
              <Discount>({Product?.discountPercentage}% OFF)</Discount>
            </PriceWrapper>
            <Texes>inclusive of all taxes</Texes>

            <Delevery>
              <span>Delivery Options</span>
              <CiDeliveryTruck size="1.5vw" className="icon" />
            </Delevery>
            <DeleveryOptions>
              <li>100% Original Products</li>
              <li>Pay on delivery might be available</li>
              <li>Easy 7 days returns and exchanges</li>
              <li>Try & Buy might be available</li>
            </DeleveryOptions>

            <Delevery>
              <span>Highlights</span>
            </Delevery>
            <DeleveryOptions>{Product?.highlights?.map((item: string) => <li key={item}>{item}</li>)}</DeleveryOptions>
            <ButtonWrapper>
              <AddToCartButton onClick={() => handleAdd(Product)}>
                <BsHandbag size="20px" className="icon" />
                <span> Add to cart</span>
              </AddToCartButton>
            </ButtonWrapper>
          </DetailsContainer>
        )}
      </ProductWrapper>

      <div className="ItemsContainer">
        <Similar>SIMILAR PRODUCTS</Similar>
        <ItemWrapper>
          {similarProducts?.map((item: any, index) => {
            const price = Math.floor(item?.price - (item?.price * item?.discountPercentage) / 100)
            return (
              <CartWrapper key={index}>
                <Imagwrap onClick={() => navigate(`/detail/${item?.category}/${item?.id}`)}>
                  <CartImage src={item?.thumbnail} />
                </Imagwrap>
                <ItemDetail>
                  <Name>{item?.title}</Name>
                  <PriceWrap>
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
                    <ProdRating>
                      <Rate count={1} disabled defaultValue={1} />
                      {item?.rating}
                    </ProdRating>
                  </PriceWrap>
                  {cartId?.includes(item.id as string) ? (
                    <Proceed onClick={handleProceed}>Proceed To Cart</Proceed>
                  ) : (
                    <ShopButton onClick={() => handleAdd(item)}> Add To Cart</ShopButton>
                  )}
                  <Playback>{item?.playback} Hours Playback</Playback>
                </ItemDetail>
              </CartWrapper>
            )
          })}
        </ItemWrapper>
      </div>
    </Container>
  )
}

export default Details
