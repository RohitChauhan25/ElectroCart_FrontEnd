import { useQuery } from 'react-query'
import reqres from '../service/axiosInstance'

interface IParams {
  key?: any
  url?: any
  configs?: any
  fetchCountry?: string
  api?: string
  data?: any
}

const useGet = ({ key, url, configs }: IParams) => {
  const get = async () => {
    const data = await reqres.get(url, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    })
    return data
  }

  const defaultConfig = {
    enabled: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
    ...configs,
  }
  return useQuery(key, get, defaultConfig)
}

export default useGet
