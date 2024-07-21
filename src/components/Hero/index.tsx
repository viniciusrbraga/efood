import {
  HeroContainer,
  Banner,
  Tipo,
  Nome,
  SubTitulo,
  Cabecalho,
  CabecalhoBanner,
  SubTit
} from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  titulo: string
  tipo: string
  capa: string
}

export const Hero = ({ titulo, tipo, capa }: Props) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const { eats } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <HeroContainer style={{ backgroundImage: `url(${fundo})` }}>
        <Cabecalho>
          <SubTit>Restaurantes</SubTit>
          <img src={logo} alt="eFood" />
          <SubTitulo onClick={openCart}>
            {eats.length} produto(s) no carrinho
          </SubTitulo>
        </Cabecalho>
      </HeroContainer>
      <Banner style={{ backgroundImage: `url(${capa})` }}>
        <CabecalhoBanner>
          <Tipo>{tipo}</Tipo>
          <Nome>{titulo}</Nome>
        </CabecalhoBanner>
      </Banner>
    </>
  )
}

export default Hero
