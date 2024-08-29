
import mongo from 'mongoose'

mongo.connect("mongodb+srv://devenderdhyani:Witz%402024@cluster0.gfpsm.mongodb.net/prisma?retryWrites=true&w=marity")

const db = mongo.connection
db.on("error",()=>{
    console.log("Connection Problem...")
})
db.once("open",()=>{
    console.log("connected With the Database Mongo Atlas")
})

const schema = mongo.Schema
const userSchema = new schema({
    title: String,
    body: String,
},{collection:"Post"})


const User = mongo.model("Post",userSchema)

// const newUser = new User({name:"DevenderDhyani",body:"this is something different"})
// newUser.save((err)=>{
//     if(err){
//         return "Bad Data"
//     }
//     console.log("Console correctoly")
// })

User.find({}).then((users)=>{
    console.log(users)
}).catch(err=>{
    console.log("Some Error")
})
    


