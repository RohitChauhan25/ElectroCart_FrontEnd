import { StartButton } from 'Styles/Header'
import { Container } from 'Styles/success'
import { Result } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Sucess = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  })
  return (
    <Container>
      <Result status="success" title="Payment successful!" subTitle="This is just implemetation of payment gateway" />
      <StartButton
        onClick={() => {
          navigate('/products')
        }}
      >
        Continue Shopping
      </StartButton>
    </Container>
  )
}

export default Sucess
