import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import DinnersList from '../../components/DinnersList'

export type Restaurant = {
  id: number
  title: string
  highlighted: boolean
  type: string
  evaluation: number
  description: string
  cover: string
  menu: bill_of_fare[]
}

export type bill_of_fare = {
  picture: string
  price: number
  id: number
  name: string
  description: string
  portion: string
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
