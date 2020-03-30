import React, { Component } from 'react'
import {Card,CardTitle,CardText,Button,FormGroup, Label,Input} from 'reactstrap'
import Axios from 'axios'


 class EditContact extends Component {

    state={
        name:"",
        email:"",
        phone:""

    }
    componentDidMount(){
        Axios.get(`/getOneContact/${this.props.match.params.id}`).
        then(contact=>this.setState({
            name:contact.data.name,
            email:contact.data.email,
            phone:contact.data.phone

        })).
        catch(err => console.log(err))
        
    } 
    
    
editContact =async editedContact =>{
    try {
        const editResult = await Axios.put(`/edit-contact/${editedContact.id}`,{
          name:editedContact.name,
          email:editedContact.email,
          phone:editedContact.phone
        })
    if(editResult.status==200) {
        this.props.history.push('/')
    }
      
      } catch (error) {
        console.log(error)
        
      }
    }
    

    handlerChange=(e)=>
    this.setState({
        ...this.state,
        [e.target.name]:e.target.value
    })


    render() {
        
   console.log(this.props)
        return (
            <div>
                 <Card body inverse color="success" className="CardSize" >
             
        <CardTitle><h2 className="color">Edit Contact</h2></CardTitle>
        <CardText >
           
            <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" value={this.state.name} onChange={this.handlerChange}/>
            <Label>Email</Label>
            <Input type="text" name="email" value={this.state.email} onChange={this.handlerChange}/>
            <Label>Phone</Label>
            <Input type="text" name="phone" value={this.state.phone} onChange={this.handlerChange}/>
            </FormGroup>
            <Button color="info" onClick={()=>this.editContact({
                ...this.state, 
                id:this.props.match.params.id})
            }>
                Save
            </Button>
        </CardText>
      </Card>
            </div>
        )
    }
}
export default EditContact
