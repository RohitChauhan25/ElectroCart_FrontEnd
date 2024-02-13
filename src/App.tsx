import Routes from 'routes'
import { useEffect } from 'react'
import Loader from 'Components/Loader'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const { loader } = useSelector((state: any) => state.loaderReducer)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [loader])

  return (
    <>
      <ToastContainer />
      {loader && <Loader />}
      <Routes />
    </>
  )
}

export default App
