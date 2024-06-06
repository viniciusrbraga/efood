import {
  Card,
  Titulo,
  Descricao,
  Infos,
  Nome,
  Nota,
  Score,
  Botao
} from './styles'
import Tag from '../Tag'
// import { LinkProps } from 'react-router-dom'

import star from '../../assets/images/star.png'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  infos: string[]
  title: string
  note: number
  description: string
  link: string
}

const Meal = ({ image, title, note, description, infos, link }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>
      <Nome>{title}</Nome>
      <Score>
        <Nota>{note}</Nota>
        <img src={star} alt={title} />
      </Score>
    </Titulo>
    <Descricao>{description}</Descricao>
    <Link to="/Perfil">
      <Botao>{link}</Botao>
    </Link>
  </Card>
)

export default Meal
