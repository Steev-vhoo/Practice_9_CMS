import { Router } from "express";
import { addContent } from "../controllers/content.js";



const contentRouter = Router();

contentRouter.post('/content', addContent)





export default contentRouter;