import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import DinnersList from '../../components/DinnersList'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <DinnersList restaurants={restaurantes} />
    </>
  )
}

export default Home
