import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import EatsList from '../../components/EatsList'
import { useGetRestQuery } from '../../services/api'

const Rest = () => {
  const { id } = useParams()

  const { data: Rest } = useGetRestQuery(id!)

  if (Rest) {
    return (
      <>
        <div className="container">
          <Hero titulo={Rest.titulo} tipo={Rest.tipo} capa={Rest.capa} />
        </div>
        <EatsList rest={Rest} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Rest
