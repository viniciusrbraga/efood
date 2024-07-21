import { HeaderBar, Titulo } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderBar>
      <img src={logo} alt="eFood" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </HeaderBar>
  )
}

export default Header
