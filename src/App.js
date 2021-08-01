import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ContactApp from './components/contactApp'
import { Container, Paper } from '@material-ui/core';
import AddContact from './components/addContact';
const App = () => {
  const [contacts, setContacts] = useState([{ name: "Shyam", "email": "shyamjaiswal@gmail.com", phone: 1234, },
  { "name": "Bob", "email": "bob32@gmail.com" },
  { "name": "Jai", "email": "jai87@gmail.com" }]);
  const [selectedUser, setSelectedUser] = useState()


  const handleDelete = (name) => {
    const confirm = window.confirm(`Are you sure want to delete this conatct ${name}`)
    if (confirm) {
      setContacts(contacts.filter(contact => contact.name !== name))
    }
  }
  const handleView = (user) => {
    setSelectedUser(user)
  }
  const handleAdd = (newContact) => {
    setContacts([...contacts,newContact])
  }
  return (
    <div className="App">
      <Container maxWidth="xs">
        <Paper elevation={15}>
          <h1>React App</h1>
          <AddContact handleAdd={handleAdd} />
          <ContactApp contactList={contacts} handleDelete={handleDelete} handleView={handleView} />
          {contacts.length === 0 ? <div>No contact left</div> : null}
          {JSON.stringify(selectedUser)}
        </Paper>
      </Container>

    </div>
  );
}

export default App;
