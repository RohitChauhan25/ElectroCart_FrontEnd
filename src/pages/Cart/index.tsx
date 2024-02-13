import {
  Container,
  Wrapper,
  AddressWrapper,
  ChangeAddress,
  Address,
  Text,
  PaymentWrapper,
  OfferWrapper,
  LeftSection,
  Offer,
  Text2,
  OffersWrap,
  ItemContainer,
  ItemWrap,
  SelectedItem,
  RemoveButton,
  ImageWrap,
  DetailWrapepr,
  Brand,
  Title,
  Amount,
  Price,
  Discount,
  Off,
  SelectWrap,
  SizeWrap,
  SizeText,
  QuantityWrap,
  QuantityText,
  ReturnWrap,
  Sumary,
  PromoCodeWrap,
  Code,
  Apply,
  InputWrap,
  Input,
  PriceDetail,
} from 'Styles/Cart'
import { Checkbox, Select } from 'antd'
import { BiSolidOffer } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { GiReturnArrow } from 'react-icons/gi'
const Cart = () => {
  //   const [current, setCurrent] = useState(0)
  //   const onChange = (value: number) => {
  //     console.log('onChange:', value)
  //     setCurrent(value)
  //   }

  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <AddressWrapper>
            <Address>
              <div>
                Dilevery To : <span> Rohit Chauhan </span>
              </div>
              <Text>Darpan city Lane no. 1 Khanpur kharar Mohali</Text>
            </Address>
            <ChangeAddress>Change Address</ChangeAddress>
          </AddressWrapper>
          <OfferWrapper>
            <OffersWrap>
              <Offer>
                <BiSolidOffer size={30} />
                Available Offres
              </Offer>
              <Text2> - Get 10% off your entire purchase</Text2>
              <Text2> - ICICI and Kotak banks offer 10% additional discounts on purchases made during the sale</Text2>
            </OffersWrap>
          </OfferWrapper>
          <ItemContainer>
            <SelectedItem>
              <Checkbox> 1/2 ITEMS SELECTED</Checkbox>
              <RemoveButton>
                <MdDeleteForever color="#ff914d" size={20} />
              </RemoveButton>
            </SelectedItem>
            <ItemWrap>
              <ImageWrap>
                <Checkbox className="checkbox" />
                {/* <input type="checkbox" /> */}
                <img
                  src="https://assets.ajio.com/medias/sys_master/root/20230624/e4ea/649663cfeebac147fcf20d64/-473Wx593H-465324816-tan-MODEL.jpg"
                  alt=""
                />
              </ImageWrap>
              <DetailWrapepr>
                <Brand>CAMPUS SUTRA</Brand>
                <Title>Regular Fit Active Training Printed Crew-Neck T-Shirt</Title>
                <Amount>
                  <Price>
                    Rs. 539
                    <Discount>
                      <del>Rs. 999</del>
                      <Off>46 %OFF</Off>
                    </Discount>
                  </Price>
                </Amount>
                <SelectWrap>
                  <SizeWrap>
                    <SizeText>Size :</SizeText>
                    <Select
                      bordered={false}
                      value={'M'}
                      options={[
                        { label: 'S', value: 'S' },
                        { label: 'M', value: 'M' },
                        { label: 'L', value: 'L' },
                      ]}
                    />
                  </SizeWrap>
                  <QuantityWrap>
                    <QuantityText>Qty :</QuantityText>
                    <Select
                      value={'1'}
                      bordered={false}
                      options={[
                        { label: '1', value: '1' },
                        { label: '2', value: '2' },
                        { label: '3', value: '3' },
                      ]}
                    />
                  </QuantityWrap>
                </SelectWrap>
                <ReturnWrap>
                  <GiReturnArrow />
                  <span>
                    <strong>14 days</strong> return available
                  </span>
                </ReturnWrap>
              </DetailWrapepr>
            </ItemWrap>
          </ItemContainer>
        </LeftSection>

        <PaymentWrapper>
          <Sumary>Summary</Sumary>

          <PromoCodeWrap>
            <Code>Promo code</Code>
            <InputWrap>
              <Input placeholder="Enter it here" /> <Apply>Apply</Apply>
            </InputWrap>
          </PromoCodeWrap>
          <PriceDetail>
            <Code>Price Details ( 1 item )</Code>
          </PriceDetail>
        </PaymentWrapper>
      </Wrapper>
    </Container>
  )
}

export default Cart
