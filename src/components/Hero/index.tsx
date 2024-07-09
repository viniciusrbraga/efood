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

type Props = {
  titulo: string
  tipo: string
  capa: string
}

export const Hero = ({ titulo, tipo, capa }: Props) => (
  <>
    <h3>{titulo}</h3>
    <HeroContainer style={{ backgroundImage: `url(${capa})` }}>
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
