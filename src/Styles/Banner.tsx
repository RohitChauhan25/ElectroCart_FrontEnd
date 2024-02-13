import styled from 'styled-components'

export const SliderWrap = styled.div``
export const EarbudsSection = styled.div`
  background-image: linear-gradient(#edfefe, #eeffff);
  padding-top: 81px;
`

export const TopSection = styled.div`
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
  .watches {
    width: 45%;
    padding-left: 20px;
    height: 600px;
  }
  .watch-details {
    align-items: flex-end;
    padding-right: 30px !important;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .watches {
      width: 100%;
      height: 370px;
    }
    .watch-details {
      align-items: center;
      padding: 0;
    }
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 20px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Title1 = styled.div`
  display: flex;
  font-size: 100px;
  flex-wrap: wrap;
  color: #1a2024;
  @media (max-width: 767px) {
    font-size: 40px;
  }
`

export const Title2 = styled.div`
  display: flex;
  font-size: 80px;
  font-weight: 700;
  color: #1a2024;
  @media (max-width: 767px) {
    font-size: 40px;
  }
`
export const Title3 = styled.div`
  display: flex;
  font-size: 40px;
  padding-bottom: 20px;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const Button = styled.div`
  display: flex;
  background-color: black;
  /* background-color: #1a2024; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  color: white;
  border-radius: 10px;
  height: 35px;
  font-weight: 500;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  border: 1px solid black;
  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: white;
    color: black;
    /* font-weight: 500; */
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 500px;
  padding-right: 20px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    height: 300px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const BottomSection = styled.div`
  background-image: linear-gradient(#edfefe, #eef2f4);
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  gap: 10px;
`
export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  padding-left: 40px;
  padding-bottom: 0;
`

export const ItemWrapper = styled.div`
  padding: 0 40px;
  display: flex;
  box-sizing: border-box;
  gap: 30px;
  overflow: hidden;
  @media (max-width: 767px) {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      height: 0px; /* Width of the scrollbar */
    }
  }
`

export const CartWrapper = styled.div`
  /* flex: 1; */
  width: 340px;
  border-radius: 10px;
  background-color: #f5f8f8;
  overflow: hidden;
  @media (max-width: 767px) {
    flex-shrink: 0;
    width: 300px;
  }
`

export const Imagwrap = styled.div`
  width: 100%;
  /* width: 350px; */
  height: 350px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 767px) {
    height: 300px;
  }
`

export const CartImage = styled.img`
  width: 100%;
  height: 100%;
  /* aspect-ratio: 1 / 1; */
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  transition: all ease-in-out 500ms;
  &:hover {
    transition: all ease-in-out 500ms;
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`

export const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
`
export const ItemDetail = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-bottom: 20px;
  gap: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
`
export const PriceWrapper = styled.div`
  width: 100%;
`

export const Price = styled.span`
  font-weight: 700;
  font-size: 16px;
`

export const Off = styled.span`
  color: green;
  font-weight: 700;
  font-size: 14px;
  padding-left: 5px;
`
export const ShopButton = styled.span`
  width: 90%;
  background-color: #1a1e21;
  padding: 7px;
  color: white;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  border: 1px solid black;
  font-weight: 700;

  &:hover {
    transition: all ease-in-out 500ms;
    border: 1px solid black;
    background-color: white;
    color: black;
    font-weight: 700;
  }
`
export const Playback = styled.span`
  width: 70%;
  background-color: #e6c90f;
  padding: 2px;
  color: black;
  font-weight: 500;
  border-radius: 10px;
  font-size: 12px;
  border: 1px solid white;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
`

export const SmartWatchesSection = styled.div`
  padding: 0;
  .back-img1 {
    background-image: linear-gradient(#eef2f4, #fae5bbed);
  }

  .back-img2 {
    background-image: linear-gradient(#fae5bbed, #eef2f4);
  }
`

export const Headphones = styled.div`
  padding: 0;
  .back-img1 {
    /* background-image: linear-gradient(#eef2f4, #fae5bbed); */
    background-image: linear-gradient(#eef2f4, #c4d3d3);
  }

  .back-img2 {
    background-image: linear-gradient(#c4d3d3, #eef2f4);
    padding-bottom: 50px;
  }
`
