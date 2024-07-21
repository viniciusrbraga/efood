import Header from '../../components/Header'
import DinnersList from '../../components/DinnersList'
import { useGetRestsQuery } from '../../services/api'

export interface Prato {
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
  cardapio: Prato[]
}

const Home = () => {
  const { data: Rests } = useGetRestsQuery()
  if (Rests) {
    return (
      <>
        <div className="container">
          <Header />
        </div>
        <DinnersList restaurants={Rests} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
