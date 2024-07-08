import {Schema, model} from "mongoose";

const UserSchema = new Schema({
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

export const UserModel = model("User", UserSchema);