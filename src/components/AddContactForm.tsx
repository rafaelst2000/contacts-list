import React, { useState, FormEvent } from 'react'
import { v4 } from 'uuid'
import Contact from '../model/Contact'

type Props = {
  onAddContact: (contact: Contact) => void
}

const AddContactForm = ({ onAddContact }: Props) =>{
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setNumber] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddContact({
      id: v4(),
      name,
      email,
      phoneNumber
    })

  }

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
      </div>

      <div>
       <label htmlFor="number">Número</label>
        <input type="number" id="number" value={phoneNumber} onChange={event => setNumber(event.target.value)} />
      </div>
      <button type="submit">Criar Contato</button>
    </form>
  )
}

export default AddContactForm