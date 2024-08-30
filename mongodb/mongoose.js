
import mongo from 'mongoose'
import express from 'express'


mongo.connect("mongodb+srv://devenderdhyani:Witz%402024@cluster0.gfpsm.mongodb.net/prisma?retryWrites=true&w=marity",{
    writeConcern: { w: 'majority' }  // Correct write concern
  })
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const db = mongo.connection
app.post("/dataStore", (req, res) => {
      const title1 = req.body.title;
      const body1 = req.body.body
        db.on("error", () => {
            console.log("Connection Problem...")
        })
        db.once("open", () => {
            console.log("connected With the Database Mongo Atlas")
        })

        const schema = mongo.Schema
        const userSchema = new schema({
            title: String,
            body: String,
        },{collection:"Action"});


        const User = mongo.models.Action || mongo.model('Action', userSchema);
        const newUser = new User({title:title1,body:body1})
        newUser.save().then(()=>{
            console.log("saved successfullly")
        }).catch(err => console.log("error: ",err))
        
        User.find({}).then((users) => {
            res.json({
               users
            })
        }).catch(err => {
            console.log("Some Error")
        })
    })
app.get("/giveUser",(req,res)=>{
    const title = req.body.title
    const body = req.body.body
    res.json({
        topic : title,
        discription : body
    })
})




app.listen(3000,()=>{
    console.log("server is running")
})





