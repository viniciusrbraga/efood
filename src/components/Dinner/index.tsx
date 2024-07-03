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
import star from '../../assets/images/star.png'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  highlighted: boolean
  type: string[]
  note: number
  description: string
  image: string
}

const Dinner = ({
  title,
  type,
  note,
  description,
  image
}: // highlighted
Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {/* {highlighted && <Tag>Destaque da semana</Tag>}
        <Tag>{type}</Tag> */}
        {type.map((info) => (
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
        <Botao>Saiba mais</Botao>
      </Link>
    </Card>
  )
}

export default Dinner
