import jwt from "jsonwebtoken";
import { UserModel } from "../models/cms.js";

export const auth = (req, res, next) => {
    const authHeader = req.header.authorization;

    if (authHeader) {
const token = authHeader.split(" ")[1]; 
jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
        return res.status(401).json({error: "Unauthorized!"})
    }
    const user = await UserModel.findOne({ _id: payload._id}).select("-password")
})
    } else {
        return res.status(403).json({error: "FORBIDDEN"})
    }
}