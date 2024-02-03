const Task = require("../Models/Task");

const create = async (req, res) => {
  try {
    const data = req.body;
    const newTask = await Task.create(data);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const update = async (req, res) => {
  try {
    const newData = req.body;
    const taskId = req.params.id;

    const updatedTask = await Task.findByIdAndUpdate(taskId, newData, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  create,
  getAll,
  update,
  remove,
};
