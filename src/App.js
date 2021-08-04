import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ContactApp from './components/contactApp'
import { Container, Paper, TextField } from '@material-ui/core';
import AddContact from './components/addContact';
import Actions from './components/action';
const App = () => {
  const [contacts, setContacts] = useState([{ name: "Shyam", "email": "shyamjaiswal@gmail.com", phone: 1234, },
  { "name": "Bob", "email": "bob32@gmail.com",phone:234567890 },
  { "name": "Jai", "email": "jai87@gmail.com",phone:345567867 }]);
  const [filteredContacts,setFilteredContacts]=useState(contacts)
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
  const handleSearch=(searchText)=>{
    const filteredConatcts=contacts.filter(contact=>contact.name.toLowerCase().includes(searchText.toLowerCase())||contact.phone.toString().includes(searchText))
    setFilteredContacts(filteredConatcts)
  }
  return (
    <div className="App">
      <Container maxWidth="xs">
        <Paper elevation={15}>
          <h1>React App</h1>
          {/* <AddContact handleAdd={handleAdd} /> */}
          <TextField type="search" placeholder="search something..." onChange={e=>handleSearch(e.target.value)}  fullWidth/>
          <ContactApp contactList={filteredContacts} handleDelete={handleDelete} handleView={handleView} />
          {filteredContacts.length === 0 ? <div>No contact left</div> : null}
          {JSON.stringify(selectedUser)}
        </Paper>
      </Container>

    </div>
  );
}

export default App;
