import React from 'react'
import {Card,CardTitle,CardText,Button} from 'reactstrap'
import {Link} from 'react-router-dom'

 const Contact = ({contact,deleteContact}) => {
     const {_id, name, email, phone}= contact
    return (
        <div>
            
             <Card body inverse color="success" className="CardSize" >
             <Link to={`/edit/${_id}`}>
        <CardTitle><h2 className="color">Contact</h2></CardTitle>
        </Link>
        <CardText>
            <span></span>
            <p>{name}</p>
            <span></span>
            <p>{email}</p>
            <span></span>
            <p>{phone}</p>
            <span></span>
        </CardText>
        
        
        <Button color="danger" onClick={()=>deleteContact(_id)}>Delete</Button>
      </Card>
        </div>
    )
}
export default Contact
