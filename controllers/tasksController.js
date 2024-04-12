let tasks = []; // Это будет наша "база данных" задач

exports.getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

exports.createTask = (req, res) => {
    const task = { id: Date.now(), title: req.body.title };
    tasks.push(task);
    res.status(201).json(task);
};

exports.getTask = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found.');
    res.json(task);
};

exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found.');
    task.title = req.body.title;
    res.json(task);
};

exports.deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Task not found.');
    tasks.splice(index, 1);
    res.status(204).send();
};
