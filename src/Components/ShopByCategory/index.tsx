import { categoryData } from 'Constant/categoryData'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Title,
  SmallTitle,
  CardContainer,
  Card,
  ImageWrapper,
  Image,
  DiscountWrapper,
  ShopButton,
} from 'Styles/ShopByCategory'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ShopByCategort() {
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <Container>
      <Title>SHOP BY CATEGORY</Title>
      <SmallTitle>New Collection New Modern Design</SmallTitle>
      <CardContainer>
        {categoryData?.map((item: any, index: number) => (
          <Card
            // data-aos="fade-up"
            className="Card"
            key={index}
            onClick={() => navigate(`/${item.type}/${item.for}/all/${item.category}`)}
          >
            <ImageWrapper>
              <Image src={item?.image} />
            </ImageWrapper>
            <DiscountWrapper>
              {/* <Category>{item?.title}</Category>
              <Discount>
                UP TO
                {item?.discount}% OFF
              </Discount> */}
              <ShopButton>Shop Now</ShopButton>
            </DiscountWrapper>
          </Card>
        ))}
      </CardContainer>
    </Container>
  )
}

export default ShopByCategort
