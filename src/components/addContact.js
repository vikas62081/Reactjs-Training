import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

const initialFormData={ name: "", email: "", phone: "" }
const AddContact = ({handleAdd}) => {
    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Form got submitted")
        handleAdd(formData)
        setFormData(initialFormData)
    }
    return (<div style={{ padding: 5, }}>
        <form onSubmit={handleFormSubmit}>
            {/* <input id="asd" value={formData.name} onChange={handleChange} /> */}
            <TextField id="name" value={formData.name} onChange={handleChange} label="Name" placeholder="Enter name" variant="outlined" fullWidth
                required margin="normal" />
            <TextField id="email" value={formData.email} onChange={handleChange} type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth
                required margin="normal" />
            <TextField id="phone" type="number" value={formData.phone} onChange={handleChange} label="Phone Number" placeholder="Enter phone number" variant="outlined" fullWidth
                required margin="normal" />
            <Button type="submit" color="secondary" variant="contained" fullWidth size="small">Create Contact</Button>
        </form>
    </div>)
}

export default AddContact;