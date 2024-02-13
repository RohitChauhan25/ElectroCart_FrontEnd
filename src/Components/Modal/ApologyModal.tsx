import { Cancel, Container, Description, Thank, Wrapper } from 'Styles/apology'
import { RxCross2 } from 'react-icons/rx'

const ApologyModal = ({ setCheckout }: any) => {
  return (
    <Container>
      <Wrapper>
        <Cancel onClick={() => setCheckout(false)}>
          <RxCross2 cursor={'pointer'} />
        </Cancel>
        <Thank>Thank You</Thank>
        <Description>
          <p>Sorry, we cannot proceed with your order at this time. this is demo project</p>
        </Description>
      </Wrapper>
    </Container>
  )
}

export default ApologyModal
