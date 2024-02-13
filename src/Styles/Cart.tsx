import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  width: 62%;
  gap: 20px;
  padding-top: 30px;
`

export const AddressWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  border: 1px solid gray;
  height: 70px;
  border-radius: 5px;
`
export const OfferWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
`

export const ItemContainer = styled.div`
  width: 100%;
`

export const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
`

export const Offer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  box-sizing: border-box;
  padding-bottom: 10px;
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 65%;
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  font-size: 14px;
  border-radius: 2px;
  span {
    font-weight: 600;
  }
`

export const OffersWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  border-radius: 2px;
  span {
    font-weight: 600;
  }
`
export const Text = styled.div`
  font-size: small;
  width: 100%;
`

export const Text2 = styled.div`
  font-size: small;
  width: 100%;
`
export const ChangeAddress = styled.div`
  display: flex;
  width: 150px;
  border: 1px solid #ed720c;
  border-radius: 2px;
  text-align: center;
  justify-content: center;
  padding: 5px;
  color: #ed720c;
  cursor: pointer;
`

export const PaymentWrapper = styled.div`
  display: flex;
  width: 40%;
  border: 1px solid gray;
  flex-direction: column;
  border-radius: 2px;
  height: 500px;
  text-align: center;
  /* justify-content: center; */
  padding: 5px;
  cursor: pointer;
`

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  .Steps {
    list-style-type: none !important; /* This removes the default list item bullets */
  }

  .ant-steps .ant-steps-item-finish .ant-steps-item-icon {
    display: none;
  }
  .ant-steps {
    font-weight: 600;
  }
  .ant-steps-item-icon {
    display: none;
  }
  .ant-steps-item-content > .ant-steps-item-title::after {
    border: 1px dashed;
  }
`

export const SelectedItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  font-weight: 600;
`

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  /* box-sizing: border-box; */
  font-weight: 600;
  padding: 5px 8px;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  color: white;
`
export const ImageWrap = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 5px;
  position: relative;
  .checkbox {
    position: absolute;
    background-color: transparent !important;
    top: 10px;
    left: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

export const DetailWrapepr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  padding-left: 10px;
  font-size: 14px;
`

export const Brand = styled.div`
  width: 100%;
  font-weight: 700;
`

export const Title = styled.div`
  width: 100%;
`

export const Amount = styled.div`
  width: 100%;
`

export const Price = styled.div`
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

export const SelectWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`

export const SizeWrap = styled.div`
  width: 90px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e4e5e6;
  border-radius: 5px;
  .ant-select {
    background-color: transparent !important;
  }
  .ant-select > {
    outline: none !important;
    border: none !important;
  }

  select {
    outline: none !important;
  }
  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
    width: auto;
  }
`
export const SizeText = styled.div`
  display: flex;
  width: 40px;
  align-items: center;
  justify-content: end;
  text-align: center;
  font-weight: 600;
`

export const QuantityWrap = styled.div`
  width: 90px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e4e5e6;
  border-radius: 5px;
  .ant-select {
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
  }

  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
    width: auto;
  }
`

export const QuantityText = styled.div`
  display: flex;
  width: 90px;
  align-items: center;
  justify-content: end;
  text-align: center;
  font-weight: 600;
`

export const ReturnWrap = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  font-size: 12px;
  gap: 5px;
`

export const Sumary = styled.div`
  gap: 5px;
  border-bottom: 1px solid;
  font-size: 18px;
  font-weight: 600;
  height: 50px;
  align-items: center;
  display: flex;
  width: 90%;
  justify-content: center;
  align-self: center;
`
export const PromoCodeWrap = styled.div`
  /* gap: 5px; */
  display: flex;
  align-self: center;
  justify-content: flex-start;
  flex-direction: column;
  /* border-bottom: 1px solid; */
  width: 90%;
  padding-top: 30px;
  padding-bottom: 50px;
`

export const Code = styled.div`
  gap: 5px;
  display: flex;
  text-transform: uppercase;
  font-weight: 600;
`

export const InputWrap = styled.div`
  gap: 5px;
  padding-top: 10px;
  display: flex;
  text-transform: uppercase;
`

export const Input = styled.input`
  gap: 5px;
  display: flex;
  text-transform: uppercase;
  width: 90%;
  outline: none;
  font-size: 12px;
  padding-left: 10px;
`

export const Apply = styled.span`
  gap: 5px;
  /* background-color: #ed720c; */
  color: #ed720c;
  border-radius: 5px;
  font-size: 16px;
  padding: 4px 10px;
  border: 1px solid #ed720c;
`

export const PriceDetail = styled.div`
  /* gap: 5px; */
  display: flex;
  align-self: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 90%;
  padding-top: 30px;
  padding-bottom: 50px;
`
