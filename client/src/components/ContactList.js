import React from 'react'
import Contact from './Contact'

 const ContactList = ({contactList, deleteContact}) => {
    return (
        <div className="position">
           {
            contactList.map((el,key)=><Contact contact={el} key={key} deleteContact={deleteContact}/>)
            
            }
        </div>
    )
}

export default ContactList
