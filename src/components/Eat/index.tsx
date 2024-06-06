import { Card, Descricao, Nome, Botao } from './styles'

// import { Link } from 'react-router-dom'

type Props = {
  image: string
  title: string
  description: string
  link: string
}

const Eat = ({ image, title, description, link }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Nome>{title}</Nome>
    <Descricao>{description}</Descricao>

    {/* <Link to="/Perfil"> */}
    <Botao>{link}</Botao>
    {/* </Link> */}
  </Card>
)

export default Eat
