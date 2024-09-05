import Header from '../../components/Header'
import DinnersList from '../../components/DinnersList'
import { useGetRestsQuery } from '../../services/api'
import { cores } from '../../styles'
import { BarLoader } from 'react-spinners'

const Home = () => {
  const { data: Rests, isLoading: isLoadingRests } = useGetRestsQuery()

  if (Rests) {
    return (
      <>
        <div className="container">
          <Header />
        </div>
        <DinnersList restaurants={Rests} isLoading={isLoadingRests} />
      </>
    )
  }
  return (
    <>
      <BarLoader color={cores.coral} />
    </>
  )
}

export default Home
