import React  from 'react'
import axios from 'axios'
import ContactList from './components/ContactList'
import './App.css'
import AddContact from './components/AddContact'
import {Route, BrowserRouter} from 'react-router-dom'
import EditContact from '../src/components/EditContact'


 class App extends React.Component {
  state={
    contactList:[]
  }
  componentDidMount(){
    this.getContacts();
  }

  getContacts = ()=> axios.get('/contacts')
  .then(contacts=>
    this.setState({
    contactList:contacts.data
  })
    ).catch(err=>console.log(err))


  addNewContact= newContact => {
    axios.post('/add-contact',newContact)
  .then(this.getContacts)
  .catch(err=>console.log(err))
  }

  deleteContact = id =>{
    axios.delete(`/delete-contact/${id}`)
    .then(this.getContacts)
    .catch(err=>console.log(err))
  }


 
  
  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
      <div>
     
        <Route exact path='/' render={()=><>
    <ContactList contactList={this.state.contactList} deleteContact={this.deleteContact}/>
    <AddContact addNewContact={this.addNewContact}/>
    </>
        }
        />
        
        <Route exact path='/edit/:id' render={(props)=><EditContact editContact={this.editContact} {...props}/>} />
      </div>
      </BrowserRouter>
    )
  }
}

export default App
