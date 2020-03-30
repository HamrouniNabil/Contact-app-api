import React, { Component } from 'react'
import {Button,Modal,ModalHeader,ModalBody,ModalFooter, Label, Input} from 'reactstrap'

class AddContact extends Component {
    state = {
        isOpen: false
       
      
      };
      toggle = () =>
        this.setState({
          isOpen: !this.state.isOpen,
          newContact:{
            name:'',
            email:'',
            phone:''
          }
        });


    onChangeHandler=e=>
    this.setState({
      ...this.state,
        newContact:{
            ...this.state.newContact,
            [e.target.name]:e.target.value
        }
    })
    
    OnSubmit = e =>{
        this.props.addNewContact(this.state.newContact);
        this.setState({
            isOpen:false
        })
    }


    render() {

    
        return (
            <div>
            <Button color="danger" onClick={this.toggle}>+ Contacts</Button>
            <Modal  isOpen={this.state.isOpen}
                    toggle={this.toggle}
        modalClassName='modal-register'>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody >
               <Label>Name</Label>
               <Input type="text" name="name" placeholder="Please input the Name ..." onChange={this.onChangeHandler}/>
               <Label>Email</Label>
               <Input type="text" name="email" placeholder="Please input the Email ..." onChange={this.onChangeHandler}/>
               <Label>Phone</Label>
               <Input type="text" name="phone" placeholder="Please input the Phone ..." onChange={this.onChangeHandler}/>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.OnSubmit}>Add</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
    }
}

export default AddContact 
