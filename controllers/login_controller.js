import user from "../models/user.model.js"; 
import bcryptjs from "bcryptjs";

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {

        const existingUser = await user.findOne({ username:username});

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = bcryptjs.compareSync(password,existingUser.password);

        //const isMatch = await user.findOne({password:password});

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};
