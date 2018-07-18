import axios from 'axios'
import { API_ENDPOINT } from 'constants'

export default axios.create({
  baseURL: API_ENDPOINT,
})
