import express from "express";
import e from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import cmsRouter from "./routes/cms.js";
import contentRouter from "./routes/content.js";
import { auth } from "./middlewares/auth.js";


//Connecting Database
await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to CMS Database")

//Create express app
const app = express()


//Apply midlleware
app.use(express.json());


//Use Routes
app.use(cmsRouter);
app.use(contentRouter)


///Listening for incoming request
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});


