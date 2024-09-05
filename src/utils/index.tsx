import { Prato } from '../types'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotal = (eats: Prato[]) => {
  return eats.reduce((acumulador, valorTotal) => {
    if (valorTotal.preco) {
      return (acumulador += valorTotal.preco)
    }
    return 0
  }, 0)
}
