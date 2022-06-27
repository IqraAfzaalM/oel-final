const express =require("express")
const app= express()
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel =require('./models/Form')
require("./db")
app.use(express.json())
app.use(cors())


app.post('/addUser',async(req,res)=>{

const name= req.body.name;
const age= req.body.age;
const email= req.body.email;
const password= req.body.password;

const user= new UserModel({name: name, age:age, email: email, contact: contact
})
 await user.save();
res.send("inserted Data")
})

app.get('/read',async(req,res)=>{
    UserModel.find({}, (err, result)=>{
    if(err){
        res.send(error);
    }    
    else{
        res.send(result);

    }
    } ) 
    await user.save();
   res.send("inserted Data")
   })

   app.get('/read',async(req,res)=>{
    const user= new UserModel({name: "Iqra Afzaal"
   })
    await user.save();
   res.send("inserted Data")
   })


app.listen(3001, ()=>{
    console.log("running on port 3001");
})