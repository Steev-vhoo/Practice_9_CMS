import { Router } from "express";
import { existingUser, newUser } from "../controllers/cms.js";


const cmsRouter = Router();

//Get route for fetching addresses from database
// cmsRouter.get('/addresses', getContacts);
   
//Post route for storing new address 
// cmsRouter.post('/login',addContacts );

cmsRouter.post('/register',newUser );

cmsRouter.post('/login',existingUser );

// cmsRouter.post('/addresses',addContacts );
   
//Put route for updating address with new data
// cmsRouter.patch('/addresses/:id',updateContact);
   
//Delete route for deleting address with specified id
// cmsRouter.delete('/addresses/:id',deleteContact);


  export default cmsRouter;