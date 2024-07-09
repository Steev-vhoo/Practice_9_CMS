import {Schema, model} from "mongoose";

const ContentSchema = new Schema({
	username: {
		type: String,
		required: [true, "username is required"],
		unique: true,
	},
    email: {type: String, required: [true, "email is required"] },
	displayName: {type: String, },
	password: {
		type: String,
		required: [true, "password is required"],
	},
});

export const validateContent = (data) => {
    const schema = joi.object({
        name: joi.string().min(4).max(50).required(),
        address: joi.string().min(4).max(100).required(),
        email: joi.string().email().required()
    })
    return schema.validate(data);
};


export const ContentModel = model("content", ContentSchema);