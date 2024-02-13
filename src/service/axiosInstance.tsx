import axios from 'axios'

const reqres = axios.create({
  baseURL: process.env.BASE_URL || 'https://electrocart-backend.onrender.com',
  // baseURL: 'http://localhost:8000/',
})

export default reqres
