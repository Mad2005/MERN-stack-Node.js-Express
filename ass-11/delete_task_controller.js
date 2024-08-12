import task from "../models/task.models.js";

export const delte = async (req, res) => {
    try {
        const del = await task.findByIdAndDelete(req.params.id);
        if (!del) return res.status(404).json({ error: 'Task not found' });
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
