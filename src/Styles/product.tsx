import { styled } from 'styled-components'

export const Conatiner = styled.div`
  width: 100%;
`

export const SimilarProdContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const ImageWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* margin-bottom: 20px; */
`
export const ProdImage = styled.img`
  transition: all ease-in-out 800ms;
  &:hover {
    transition: all ease-in-out 800ms;
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
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

export const CartPriceContainer = styled.div`
  display: flex;
  width: 90%;
  padding-left: 10px;
  justify-content: space-between;
`

export const Price = styled.div`
  padding-left: 5px;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
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

export const Image = styled.img`
  width: 230px;
  height: 300px;
`

export const ItemWrapper = styled.div`
  width: 230px;
  height: 400px;
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.1),
      0 8px 16px rgba(0, 0, 0, 0.1);
  }
`

export const ProdRating = styled.div`
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

export const ProdTitle = styled.div`
  padding-left: 5px;
  font-size: 13px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
