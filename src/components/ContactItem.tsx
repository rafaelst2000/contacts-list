import React from 'react'
import Contact from '../model/Contact'
import styled from 'styled-components'


type Props = {
  contact: Contact;
  onRemoveContact: (id: string) => void;
}

const Card = styled.li `
  padding: 16px;
  border-radius: 20px;
  background-color: #ccc;

  & + & {
    margin-top: 16px;
  }
`

const ConctactItem = ( { contact, onRemoveContact }: Props) => (
  
    <Card>
      <p>Nome: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Telefone: {contact.phoneNumber}</p>

      <button onClick={() => onRemoveContact(contact.id)}>Excluir Contato</button>
    </Card>
 
)

export default ConctactItem