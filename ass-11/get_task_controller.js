import task from "../models/task.models.js";

export const getAlltasks = async (req, res) => {
    try {
        const Tasks = await task.find({});
        res.status(200).json(Tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};