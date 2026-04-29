export interface ConvertRequest {
  amount: number
  from: 'uf' | 'clp'
  to: 'uf' | 'clp'
}

export interface ConvertResponse {
  amount: number
  from: 'uf' | 'clp'
  to: 'uf' | 'clp'
  result: number
  ufValue: number
  date: string
}
