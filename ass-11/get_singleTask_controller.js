import task from "../models/task.models.js";


export const single = async (req, res) => {
    try {
        const sinTask = await task.findById(req.params.id);
        if (!sinTask) return res.status(404).json({ error: 'Task not found' });
        res.json(sinTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};