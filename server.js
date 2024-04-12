const express = require('express');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Для разбора JSON-формата запросов
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
