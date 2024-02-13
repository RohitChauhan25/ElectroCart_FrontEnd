import { ShopButton } from 'Styles/Banner'
import { Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<ShopButton onClick={() => navigate('/')}>Back Home</ShopButton>}
      />
    </div>
  )
}

export default NotFoundPage
