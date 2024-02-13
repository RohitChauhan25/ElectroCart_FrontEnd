import {
  BottomSection,
  Button,
  CartImage,
  CartWrapper,
  ContentWrapper,
  EarbudsSection,
  Headphones,
  Image,
  ImageWrapper,
  Imagwrap,
  ItemDetail,
  ItemWrapper,
  Name,
  Off,
  Playback,
  Price,
  PriceWrapper,
  ShopButton,
  SliderWrap,
  SmartWatchesSection,
  Title,
  Title1,
  Title2,
  Title3,
  TopSection,
} from 'Styles/Banner'
import banner from 'Assets/AirbudImage/bannerAir.webp'
import banner2 from 'Assets/AirbudImage/banner2.webp'
import banner3 from 'Assets/AirbudImage/headphoneBanner.webp'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Airbuds, HeadphonesData, Watches } from 'Constant/airbudData'
import { Link, useNavigate } from 'react-router-dom'

function Banner() {
  const navigate = useNavigate()

  console.log(navigate)

  return (
    <SliderWrap>
      <EarbudsSection>
        <TopSection>
          <ContentWrapper>
            <Title1>True Wireless</Title1>
            <Title2>Earbuds</Title2>
            <Title3>
              Starting from <b>₹999*</b>
            </Title3>
            <Link to={'/products'}>
              <Button>Shop Products</Button>
            </Link>
          </ContentWrapper>
          <ImageWrapper>
            <Image src={banner} />
          </ImageWrapper>
        </TopSection>

        <BottomSection>
          <Title>
            Best <b>Sellers</b>
          </Title>
          <ItemWrapper>
            {Airbuds?.map((item: any, index) => (
              <CartWrapper key={index}>
                <Imagwrap>
                  <CartImage src={item?.image} />
                </Imagwrap>
                <ItemDetail>
                  <Name>{item?.name}</Name>
                  <PriceWrapper>
                    <Price>₹{item?.price}</Price>
                    <Off>{item?.off}% off</Off>
                  </PriceWrapper>

                  <ShopButton onClick={() => navigate('/product/cat/Earbuds')}>Shope now</ShopButton>
                  <Playback>{item?.playback} Hours Playback</Playback>
                </ItemDetail>
              </CartWrapper>
            ))}
          </ItemWrapper>
        </BottomSection>
      </EarbudsSection>
      <SmartWatchesSection>
        <TopSection className="back-img1">
          <ImageWrapper className="watches">
            <Image src={banner2} />
          </ImageWrapper>
          <ContentWrapper className="watch-details">
            <Title1>
              Smart <b> Watches</b>
            </Title1>
            <Title3>
              Starting from <b>₹999*</b>
            </Title3>
            <Link to={'/products'}>
              <Button>Shop Products</Button>
            </Link>
          </ContentWrapper>
        </TopSection>
        <BottomSection className="back-img2">
          <Title>
            Best <b>Sellers</b>
          </Title>
          <ItemWrapper>
            {Watches?.map((item: any, index) => (
              <CartWrapper key={index}>
                <Imagwrap>
                  <CartImage src={item?.image} />
                </Imagwrap>
                <ItemDetail>
                  <Name>{item?.name}</Name>
                  <PriceWrapper>
                    <Price>₹{item?.price}</Price>
                    <Off>{item?.off}% off</Off>
                  </PriceWrapper>
                  <ShopButton onClick={() => navigate('/product/cat/Smartwatch')}>Shope now</ShopButton>

                  <Playback>{item?.playback} </Playback>
                </ItemDetail>
              </CartWrapper>
            ))}
          </ItemWrapper>
        </BottomSection>
      </SmartWatchesSection>

      <Headphones>
        <TopSection className="back-img1">
          <ContentWrapper>
            <Title1>
              <b>Headphones</b>
            </Title1>
            <Title3>
              Starting from <b>₹1199*</b>
            </Title3>
            <Link to={'/products'}>
              <Button>Shop Products</Button>
            </Link>
          </ContentWrapper>
          <ImageWrapper className="watches">
            <Image src={banner3} />
          </ImageWrapper>
        </TopSection>
        <BottomSection className="back-img2">
          <Title>
            Best <b>Sellers</b>
          </Title>
          <ItemWrapper>
            {HeadphonesData?.map((item: any, index) => (
              <CartWrapper key={index}>
                <Imagwrap>
                  <CartImage src={item?.image} />
                </Imagwrap>
                <ItemDetail>
                  <Name>{item?.name}</Name>
                  <PriceWrapper>
                    <Price>₹{item?.price}</Price>
                    <Off>{item?.off}% off</Off>
                  </PriceWrapper>
                  <ShopButton onClick={() => navigate('/product/cat/Headphone')}>Shope now</ShopButton>

                  <Playback>{item?.playback} Hours Playback</Playback>
                </ItemDetail>
              </CartWrapper>
            ))}
          </ItemWrapper>
        </BottomSection>
      </Headphones>
    </SliderWrap>
  )
}

export default Banner
