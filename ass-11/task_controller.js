import task from "../models/task.models.js";

export const create = async (req, res) => {
    try {
        const t = new task(req.body);
        await t.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
