import React, { useState } from 'react'
import styled from 'styled-components'
import CONTACTS from '../contacts'

import ConctactItem from '../components/ContactItem'
import AddContactForm from '../components/AddContactForm'

import Contact from '../model/Contact'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  width: 768px;
  padding: 16px;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  overflow-y: auto;
`
const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Contacts = () => {
  const [contacts, setContacts] = useState(CONTACTS)
  const [isAddContact, setAddContact] = useState(false)

  const handleRemoveContact = (id: string) => {
    setContacts(contacts => contacts
      .filter(contact => contact.id !== id))
  }

  const handleAddContact = (contact: Contact) => {
    setContacts(contacts => contacts.concat(contact))
    setAddContact(false)
  }


  return(
    <Wrapper>
      <Card>
        <header>
          {isAddContact && <AddContactForm onAddContact={handleAddContact}/>}
          <button onClick={() => setAddContact(true)}>Adicionar Contato</button>
        </header>

      <ContactList>
        {
          contacts.map(contact => (
            <ConctactItem
              key={contact.id}
              contact={contact}
              onRemoveContact={handleRemoveContact} />
          ))
        }
      </ContactList>
     </Card> 
    </Wrapper>
  ) 
}

export default Contacts