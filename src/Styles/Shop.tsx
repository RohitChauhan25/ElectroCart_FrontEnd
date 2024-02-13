import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductsContainer = styled.div`
  display: flex;
`

export const Top = styled.div`
  display: flex;
  margin-top: 140px;
  padding: 0 30px 0 20px;
  justify-content: space-between;
`

export const Hedding = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
`

export const SortByWrapper = styled.div`
  display: flex;
  border: 1px solid #b7babc;
  width: auto;
  min-width: 200px;
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 5px;
  span {
    margin-right: 5px;
  }
  &:hover {
    border-color: black;
  }
  .customeClass {
    border: none !important;
    min-width: 130px !important;
  }
`

export const FilterWrapper = styled.div`
  box-sizing: border-box;
  width: 300px;
  border: 1px solid #b7babc;
  padding-top: 5px;
  height: 100%;
  /* padding-left: 20px; */
`

export const TitleWrapper = styled.div`
  box-sizing: border-box;
  font-weight: 700;
  padding-top: 20px;
  padding-bottom: 5px;
  padding-left: 35px;
`

export const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding-left: 35px;
  border-bottom: 1px solid #b7babc;
  padding-bottom: 20px;
  .ant-radio-checked::after {
    border: 1px solid #004aad !important;
  }

  .ant-radio-checked .ant-radio-inner {
    background-color: #004aad !important;
    border: 1px solid #004aad !important;
  }
`

export const More = styled.div`
  color: red;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

export const PriceRange = styled.div`
  font-weight: 700;
  padding: 5px 5px 5px 20px;
`
export const DiscountRange = styled.div`
  font-weight: 700;
  padding: 5px 5px 5px 20px;
`

export const ItemContainer = styled.div`
  padding-top: 25px;
  padding-left: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border-top: 1px solid #b7babc;
  width: 100%;
`

export const ItemWrapper = styled.a`
  width: 230px;
  height: 400px;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.2),
      0 8px 16px rgba(0, 0, 0, 0.2);
    scale: 1.05;
    transition: all 300ms ease-in-out;
    .child {
      padding-top: 15px;
      visibility: visible;
      transition: all 300ms ease-in-out;
    }
  }
`

export const ImageWrapper = styled.div`
  width: 230px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`

export const Image = styled.img`
  width: 230px;
  height: 300px;
`

export const Brand = styled.div`
  padding-left: 5px;
  padding-top: 5px;
  font-size: 13px;
  font-weight: 700;
`

export const Title = styled.div`
  padding-left: 5px;
  font-size: 13px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Price = styled.div`
  padding-left: 5px;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
`

export const Discount = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding-left: 10px;
`

export const Off = styled.span`
  padding-left: 10px;
  color: red;
  font-weight: 500;
`

export const Rating = styled.div`
  position: absolute;
  background-color: #ece7df;
  align-items: center;
  justify-content: center;
  padding: 4px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  left: 10px;
  top: 270px;
  img {
    padding-left: 5px;
    padding-right: 5px;
    height: 13px;
    width: 13px;
  }
`

export const WishList = styled.p`
  position: absolute;
  visibility: hidden;
  height: 60px;
  width: 100%;
  background-color: white;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: 1px solid #dad9d9;
    padding: 10px 10px;
    background-color: transparent;
    width: 90%;
    display: flex;
    justify-content: center;
    gap: 10px;
    border-radius: 5px;
    text-transform: uppercase;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1); */
    font-weight: 600;
    cursor: pointer;
  }
`
