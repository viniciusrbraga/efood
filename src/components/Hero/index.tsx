import {
  HeroContainer,
  Banner,
  Tipo,
  Nome,
  SubTitulo,
  Cabecalho,
  CabecalhoBanner
} from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

type Props = {
  titulo: string
  tipo: string
  capa: string
}

export const Hero = ({ titulo, tipo, capa }: Props) => (
  <>
    <HeroContainer style={{ backgroundImage: `url(${fundo})` }}>
      <Cabecalho>
        <SubTitulo>Restaurantes</SubTitulo>
        <img src={logo} alt="eFood" />
        <SubTitulo>0 produto(s) no carrinho</SubTitulo>
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

export default Hero
