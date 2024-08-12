import task from "../models/task.models.js";

export const update= async (req, res) => {
    try {
        const up = await task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!up) return res.status(404).json({ error: 'Task not found' });
        res.json(up);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
