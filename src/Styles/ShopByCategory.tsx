import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding-top: 30px;
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 15px;
  }

  .show {
    opacity: 1;
    transform: translateX(0);
    transition:
      opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
  }

  .Title.show {
    transform: translateX(0); /* You can customize the X value based on your design */
  }
`

const slideInFromBottom = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideInFromleft = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 30px;
  word-spacing: 2px;
  /* animation: ${slideInFromleft} 0.8s ease-in-out; */
  @media (max-width: 767px) {
    font-size: 25px;
  }
`

export const SmallTitle = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  /* animation: ${slideInFromBottom} 0.8s ease-in-out; */
  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  button {
    margin-bottom: 4vh;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .btn > :hover {
    color: orange;
  }
`

export const CardContainer = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  gap: 10px;

  /* .Card.show {
    opacity: 1;
    animation: ${slideInFromBottom} 2s ease-in-out;
  } */
`

export const Card = styled.div`
  width: 100%;
  position: relative;
  max-width: 270px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 300px;
  cursor: pointer;
  border-radius: 15px;
  border: 5px solid #f8f9f8;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  /* transition: all ease-in-out 800ms; */

  &:hover {
    background-color: red;
  }
`

export const DiscountWrapper = styled.div`
  position: absolute;
  width: 85%;
  background-color: transparent;
  bottom: 0;
  padding: 5px;
  min-height: 60px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Discount = styled.div`
  font-size: 25px;
  display: flex;
  font-weight: 800;
  text-align: center;
  justify-content: center;
  font-family: serif;
`

export const Category = styled.div`
  text-transform: capitalize;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: #004aad;
`

export const ShopButton = styled.div`
  text-transform: capitalize;
  width: 90%;
  text-align: center;
  padding: 10px;
  font-weight: 700;
  transition: opacity 0.8s ease;
  opacity: 0;
  background-color: white;
  color: black;
  ${Card}:hover & {
    opacity: 1;
  }
  /* border: 1px solid black; */
  transition: all ease-in-out 500ms;

  &:hover {
    background-color: #1a1e21;
    color: white;
    transition: all ease-in-out 500ms;
    border: 1px solid white;
  }

  /* color: black; */
`

export const ImageWrapper = styled.div`
  width: 270px;
  min-height: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
`

export const Image = styled.img`
  transition: all ease-in-out 800ms;
  &:hover {
    transition: all ease-in-out 800ms;
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`

export const ItemTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`
export const Rating = styled.div`
  width: 90%;
  justify-self: flex-start;
  padding-left: 10px;
  .rating {
    font-size: 12px;
  }
`

export const CartPriceContainer = styled.div`
  display: flex;
  width: 90%;
  padding-left: 10px;
  justify-content: space-between;
`

export const Price = styled.div`
  padding-bottom: 2px;
`

export const PriceWrapper = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  color: #068d33;
  display: flex;
  justify-self: flex-start;
  align-items: center;
`

export const CartWrap = styled.div`
  border: 1px solid #068d33;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
