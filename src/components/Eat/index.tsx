import { useState } from 'react'
import {
  Card,
  Descricao,
  Nome,
  Botao,
  Modal,
  ModalContent,
  DescricaoContainer,
  DadosContainer
} from './styles'

import fechar from '../../assets/images/fechar.png'

// import { Link } from 'react-router-dom'

type Props = {
  id: number
  image: string
  name: string
  description: string
  portion: string
  price: number
}

interface ModalState {
  estaVisivel: boolean
  // url: string
}

const Eat = ({ image, name, description, portion, price }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false
    // url: ''
  })

  const closeModal = () => {
    setModal({
      estaVisivel: false
      // url: ''
    })
  }

  return (
    <>
      <Card>
        <img src={image} alt={name} />
        <Nome>{name}</Nome>
        <Descricao>{description}</Descricao>
        {/* <Botao>Mais detalhes</Botao> */}
        <Botao
          onClick={() => {
            setModal({
              estaVisivel: true
              // url: media.url
            })
          }}
        >
          Mais detalhes
        </Botao>
      </Card>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={image} alt="Pizza" />
          <DadosContainer>
            <DescricaoContainer>
              <h4>{name}</h4>
              <p>{description}</p>
              <p>{portion}</p>
            </DescricaoContainer>
            <Botao>Adicionar ao carrinho - R$ {price}</Botao>
          </DadosContainer>
          <img
            className="CloseModal"
            src={fechar}
            alt="iconde de fechar"
            onClick={() => {
              closeModal()
            }}
          />
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Eat
