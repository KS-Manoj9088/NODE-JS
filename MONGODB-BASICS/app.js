const mongoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://KolluruSriManojKumar:ManojKumar2@cluster1.0apkyck.mongodb.net/thunder",
    // Connection String antha raasi lastlo "/database name" isthae respective database create avuthaadhi
).then( ()=>{
    console.log("Connected to MongoDB Succesfully")
})
.catch( (err)=>{
    console.log("Error while connecting to MongoDB", err)
});

// Create Schema for storing in Collection
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive : Boolean,
    course : [String],
    createdAt : {type:Date, default : Date.now}
});

// Create User Model
const User = mongoose.model("User", userSchema);     //Collection name simply
// Our model is the entry point to do any stuff on our schema....
// whether to do any CRUD operations like that...

async function runQueryExamples(){
    try{
        /*
            const newUser = new User({
            name : "Thunder Kumar",
            email : "Thunderkumar@gmail.com",
            age : 21,
            isActive : true,
            course : ["ML", "Full Stack Dev", "Java", "AI"],
            createdAt : new Date()
        });

        await newUser.save();
        */

        /*
        const newUser = await User.create({
            name : "Thunder Kumar",
            email : "Thunderkumar@gmail.com",
            age : 21,
            isActive : true,
            course : ["ML", "Full Stack Dev", "Java", "AI"],
            createdAt : new Date()
        });*/

        const newUser1 = await User.insertOne({
            name : "Deekshitha",
            email : "Deekshitha@gmail.com",
            age : 22,
            isActive : true,
            course : ["ML", "Full Stack Dev", "Java"],
            createdAt : new Date()
        });

        // declare a variable and Using a "AWAIT" promise --> we can create general mongodb queries.
        const getNamesAndAge = await User.find({$and : [{"name" : "Thunder Kumar", "age":21}]}, {_id:false,createdAt:false});
        //console.log(getNamesAndAge);

        const getName = await User.findById(newUser1._id).select("name email age isActive -_id");
        //console.log(getName);

        const getAllUsers = await User.find().sort({"name":-1}).limit(2).skip(1);
        //console.log(getAllUsers);

        //console.log(`Created New User : ${newUser1}`);
    }
    catch(e){
        console.log("Error while running query examples", e)
    }
    finally{
        await mongoose.connection.close();
    }
}

runQueryExamples()