import { IsString, IsNotEmpty } from "class-validator";
import { IUser } from "@common/models/user.example.model";

class UserDTO {	
	@IsNotEmpty({ message: "Email is required" })
	@IsString({ message: "Email must be a string" })
	public email!: string;

	@IsNotEmpty({ message: "Password is required" })
	@IsString({ message: "Password must be a string" })
	public password!: string;

	constructor(obj: IUser) {
		Object.assign(this, obj);
	}
}

export default UserDTO;