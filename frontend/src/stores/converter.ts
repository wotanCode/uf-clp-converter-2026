import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios, { AxiosError } from 'axios'
import { convertCurrency } from '../services/api'
import type { ConvertRequest, ConvertResponse } from '../interfaces'

export const useConverterStore = defineStore('converter', () => {
  const result = ref<ConvertResponse | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getErrorMessage = (err: unknown): string => {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<{ message?: string }>
      return (
        axiosError.response?.data?.message || axiosError.message || 'Error al conectar con la API'
      )
    }

    if (err instanceof Error) {
      return err.message
    }

    return 'Error desconocido'
  }

  const performConversion = async (payload: ConvertRequest) => {
    loading.value = true
    error.value = null
    result.value = null

    try {
      const data = await convertCurrency(payload)
      result.value = data
    } catch (err: unknown) {
      error.value = getErrorMessage(err)
    } finally {
      loading.value = false
    }
  }

  const reset = () => {
    result.value = null
    error.value = null
  }

  return {
    result,
    loading,
    error,
    performConversion,
    reset,
  }
})
