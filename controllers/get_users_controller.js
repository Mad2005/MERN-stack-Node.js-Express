import user from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
   
    try {
        const users = await user.find({});
        res.status(200).json(users );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};
