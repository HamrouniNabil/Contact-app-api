const express = require("express")
const {MongoClient,ObjectID} = require ('mongodb')
const app = express()
app.use(express.json())

const mongoURI = "mongodb+srv://dbNabil:Andjusticeforall2019@cluster0-m12vs.mongodb.net/contact_db?retryWrites=true&w=majority"
const db= "contact_db"
MongoClient.connect(mongoURI,{useUnifiedTopology:true},(err,client)=>{
        if(err) throw err;
        console.log('db connected ...');
        const dataB = client.db(db); 
//CRUD
app.get('/contacts',(req,res)=>{
 dataB.collection('contact').find().toArray((err,data)=>{
     if (err) throw err;
     res.send(data);
 })
})

app.post('/add-contact',(req,res)=>{
    const newContact = req.body;
    dataB.collection('contact').insertOne(newContact,(err,data)=>{
    if (err) throw err;
    res.send(data);    
 })   
})

app.get('/getOneContact/:id',(req,res)=>{
    const {id}= req.params;
    dataB.collection('contact').findOne({_id:ObjectID(id)},(err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})

app.put('/edit-contact/:id',(req,res)=>{
    const {id} = req.params;
    const editedContact = req.body;
    console.log(req.body);
    dataB.collection('contact').findOneAndUpdate({_id:ObjectID(id)},{$set:editedContact},(err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})

app.delete('/delete-contact/:id',(req,res)=>{
const {id}= req.params;
console.log(ObjectID(id))
dataB.collection('contact').deleteOne({_id:ObjectID(id)},(err,data)=>{
    if(err) throw err;
    res.send('user deleted');
})
})

})

const PORT = process.env.PORT || 5000;
app.listen(PORT,(err)=>
err ?
console.error(err):
console.log('the server is Running',PORT

)  
);