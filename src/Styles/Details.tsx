import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  padding-bottom: 100px;
  .ItemsContainer {
    box-sizing: border-box;
    padding: 10px 30px;
    width: 100%;
    margin-top: 20px;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  box-sizing: border-box;
  /* gap: 20px; */
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  height: fit-content;
  .swiper-button-prev {
    --swiper-navigation-size: 20px;
  }

  .swiper-button-next {
    --swiper-navigation-size: 20px;
  }

  .mySwiper .swiper-slide img {
    width: 100px !important;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }

  .mySwiper .swiper-slide {
    height: 100px !important;
    background-size: cover;
    display: flex;
    background-position: center;
    opacity: 0.7;
  }

  .mySwiper2 .swiper-slide img {
    height: 550px;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .mySwiper2 .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 img {
    border-radius: 15px;
    object-fit: cover !important;
  }

  .mySwiper {
    height: 100% !important;
    overflow: visible !important;
  }

  .mySwiper2 {
    width: 100 !important;
    height: 100% !important;
    overflow: hidden !important;
  }

  .swiper-slide-thumb-active {
    opacity: 1 !important;
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const Similar = styled.div`
  width: 100%;
  display: flex;
  padding-top: 50px;
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 0;
  margin-bottom: 20px;
`

export const BigImage = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    height: 350px;
    .mySwiper2 .swiper-slide img {
      height: 350px !important;
      width: 90% !important;
      object-fit: cover;
      cursor: pointer;
    }
    .mySwiper2 .swiper-slide {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center !important;
      background-size: cover;
      background-position: center;
      box-sizing: border-box;
    }

    .mySwiper2 {
      width: 95%;
      height: fit-content !important;
      display: flex;
      justify-content: center;
      overflow: hidden !important;
      box-sizing: border-box !important;
    }
  }
`
export const ThumbImage = styled.div`
  width: 27%;
  box-sizing: border-box !important;
  padding-left: 50px !important;
  @media (max-width: 767px) {
    width: 95%;
    padding-left: 10px !important;
    .mySwiper .swiper-wrapper {
      flex-direction: row !important;
      padding-top: 10px;
      gap: 5px;
    }
    .mySwiper .swiper-slide img {
      width: 50px !important;
      height: 50px !important;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`

export const DetailsContainer = styled.div`
  padding-top: 20px;
  gap: 10px;
  width: 50%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const BrandName = styled.div`
  font-weight: 700;
  font-size: 22px;
`

export const Title = styled.div`
  font-weight: 700;
  /* color: #023f7c; */
  font-size: 22px;
`

export const Description = styled.div`
  font-size: 14px;
`

export const Rating = styled.div`
  border: 1px solid #b0b8c0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-weight: 700;
  padding: 0 15px;
  height: 30px;
  border-radius: 3px;
  cursor: pointer;
  img {
    padding-left: 5px;
    padding-right: 5px;
    height: 18px;
    width: 18px;
  }
  span {
    font-weight: 400;
    border-left: 1px solid #979ea5;
    padding-left: 5px;
    color: #979ea5;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  text-transform: uppercase;
  padding-top: 15px;
  gap: 20px;
`

export const AddToCartButton = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-weight: 700;
  color: white;
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: white;
    color: black;
  }

  span {
    padding-left: 5px;
  }
`

export const AddToWishlist = styled.div`
  display: flex;
  display: flex;
  width: 300px;
  max-width: 250px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 700;
  border-radius: 5px;
  border: 1px solid #dcd5d5;
  padding: 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }

  span {
    padding-left: 5px;
  }
`

export const SepratorLine = styled.div`
  width: 90%;
  margin-top: 10px;
  border: 1px solid #bcc2c8;
`

export const PriceWrapper = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 0;
  span {
    font-weight: 400;
    color: gray;
    font-size: 14px;
    padding-left: 10px;
  }
`

export const Discount = styled.span`
  color: #00c68c !important;
  font-weight: 600 !important;
  font-size: 16px !important;
`

export const Texes = styled.div`
  color: #039c03;
  font-size: 14px;
  font-weight: 600;
`

export const SizeWrapper = styled.div``

export const Size = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  span {
    padding-left: 10px;
    color: red;
    cursor: pointer;
  }
`

export const SizeButton = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`

export const SizeLiszt = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 20px;
  .selected {
    background-color: black;
    color: white;
  }
`

export const Delevery = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  font-weight: 700;
  span {
    padding-right: 15px;
  }
`

export const DeleveryOptions = styled.ul`
  font-size: 14px;
  margin: 0;
`

export const TabContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  .ant-tabs-card {
    width: 450px !important;
  }
`
export const ProductDetails = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  span {
    padding-right: 15px;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  div {
    padding: 5px 5px 5px 0;
  }
`

export const DetailTitle = styled.div`
  display: flex;
  align-items: center;
`
