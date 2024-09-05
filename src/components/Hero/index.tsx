import * as S from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { Link } from 'react-router-dom'

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
      <S.HeroContainer style={{ backgroundImage: `url(${fundo})` }}>
        <S.Cabecalho>
          <S.SubTit>Restaurantes</S.SubTit>
          <Link to="/">
            <img src={logo} alt="eFood" />
          </Link>
          <S.SubTitulo onClick={openCart}>
            {eats.length} produto(s) no carrinho
          </S.SubTitulo>
        </S.Cabecalho>
      </S.HeroContainer>
      <S.Banner style={{ backgroundImage: `url(${capa})` }}>
        <S.CabecalhoBanner>
          <S.Tipo>{tipo}</S.Tipo>
          <S.Nome>{titulo}</S.Nome>
        </S.CabecalhoBanner>
      </S.Banner>
    </>
  )
}

export default Hero
