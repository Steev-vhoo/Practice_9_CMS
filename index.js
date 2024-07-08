import express from "express";
import e from "cors";
import mongoose from "mongoose";
import cmsRouter from "./routes/cms.js";


//Connecting Database
await mongoose.connect(process.env.mongo_url);
console.log("Connected to CMS Database")

//Create express app
const app = express()


//Apply midlleware
app.use(express.json());


//Use Routes
app.use(cmsRouter);


///Listening for incoming request
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});


