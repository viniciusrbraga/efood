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

export const Hero = () => (
  <>
    <HeroContainer>
      <Cabecalho>
        <SubTitulo>Restaurantes</SubTitulo>
        <img src={logo} alt="eFood" />
        <SubTitulo>0 produto(s) no carrinho</SubTitulo>
      </Cabecalho>
    </HeroContainer>
    <Banner>
      <CabecalhoBanner>
        <Tipo>Italiana</Tipo>
        <Nome>La Dolce Vita Trattoria</Nome>
      </CabecalhoBanner>
    </Banner>
  </>
)

export default Hero
