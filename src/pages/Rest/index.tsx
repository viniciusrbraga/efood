import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import EatsList from '../../components/EatsList'

import { Restaurant } from '../Home'

const Rest = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <div className="container">
        <Hero
          titulo={restaurante.titulo}
          tipo={restaurante.tipo}
          capa={restaurante.capa}
        />
      </div>
      <EatsList menu={restaurante} />
    </>
  )
}

export default Rest
