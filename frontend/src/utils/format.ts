export const formatCurrency = (value: number, currency: 'clp' | 'uf') => {
  if (currency === 'clp') {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(value)
  }

  return (
    new Intl.NumberFormat('es-CL', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value) + ' UF'
  )
}
