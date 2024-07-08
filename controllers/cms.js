import { UserModel } from "../models/cms.js";
import bcrypt from "bcrypt";



export const newUser = async (req, res, next) => {
    try {
        //Registering new user
        const { username, email, password } = req.body;
        // Checking all the missing fields
        if (!username || !email || !password)
            return res.status(400)
                .json({ error: `Please enter all the requiured fields` })


        //Email validation
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!emailReg.test(email))
            return res
                .status(400)
                .json({ error: `Please enter a valid email address` });

        //Usename validation
        if (username.length <= 5) return res
            .status(400)
            .json({ error: `Username should be more than 5 characters` })

        //Password validation
        if (password.length <= 6) return res
            .staus(400)
            .json({ error: `Password must be at least 6 characters long` })
        try {

            const doesUserAlreadyExist = await UserModel.findOne({ email });
            if (doesUserAlreadyExist) return res.status(400).json({ error: `A user with the email [${email}]already exist` })
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUsers = UserModel({ username, email, displayName, password: hashedPassword })

            //Save the user
            const result = await newUsers.save();

            result._doc.password = undefined;
            res.status(201).json({ ...result._doc })
        }
        catch (error) {
            next(error);
        }
    }
    catch (error) {
        next(error)
    }
}

export const existingUser = async (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password)
        return res
    .status(400)
    .json({error: `Please enter all the required fields`});

    //email validation
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!emailReg.test(email))
            return res
                .status(400)
                .json({ error: `Please enter a valid email address` });
        try {
            const doesUserExist = await UserModel.findOne({email})

            if (!doesUserExist) return res.status(400).json({ error: `Invalid email or password`})
        //If user actually exist
    const doesPasswordMatch = await bcrypt.compare(password, doesUserExist.password);

    if (!doesPasswordMatch) return res.status(400).json()
        } catch (error) {
            
        }






}
