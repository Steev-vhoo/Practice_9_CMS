import { ContentModel, validateContent } from "../models/content.js";
//import joi

export const addContent = async (req, res, next) => {
    const {error} = validateContent(req.body);

    if (error) {
        return res.status(400).json({error: error.details[0].message})
    }
}