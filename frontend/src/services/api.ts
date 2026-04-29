import axios from 'axios'
import type { ConvertRequest, ConvertResponse } from '../interfaces'

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const convertCurrency = async (data: ConvertRequest): Promise<ConvertResponse> => {
  const response = await apiClient.post<ConvertResponse>('/conversion/convert', data)
  return response.data
}
