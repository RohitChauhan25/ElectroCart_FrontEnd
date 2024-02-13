import reqres from '../service/axiosInstance'
import { Dispatch } from 'redux'
import { toggleLoader } from 'Store/slice/loader'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
interface IParams {
  url: string
  payload?: any
  token?: boolean
}

const post = async ({ url, payload, token }: IParams, dispatch: Dispatch) => {
  const authToken = localStorage.getItem('token')
  const headers: any = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  }

  if (token) {
    headers.token = authToken
  }

  try {
    dispatch(toggleLoader(true))
    const data = await reqres.post(url, payload, { headers })
    if (data) {
      dispatch(toggleLoader(false))
    }

    return data
  } catch (error) {
    dispatch(toggleLoader(false))
    return error
  }
}

const usePost = () => {
  const dispatch = useDispatch()
  return useMutation((params: any) => post(params, dispatch))
}

export default usePost
