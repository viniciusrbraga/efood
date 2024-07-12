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
  titulo: string
  destacado: boolean
  tipo: string[]
  nota: number
  descricao: string
  capa: string
}

const Dinner = ({
  titulo,
  tipo,
  nota,
  descricao,
  capa,
  id
}: // destacado
Props) => {
  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Infos>
        {tipo.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>
        <Nome>{titulo}</Nome>
        <Score>
          <Nota>{nota}</Nota>
          <img src={star} alt={titulo} />
        </Score>
      </Titulo>
      <Descricao>{descricao}</Descricao>
      <Link to={`/rest/${id}`}>
        <Botao>Saiba mais</Botao>
      </Link>
    </Card>
  )
}

export default Dinner
