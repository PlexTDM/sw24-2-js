import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import fs from 'fs';

const __dirname = path.resolve();
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = http.createServer(app)
const todosFilePath = path.join(__dirname, './todos.json');


app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/todo', (req, res) => {
    res.sendFile(todosFilePath)
})

app.post('/todo', (req, res) => {
    const updatedData = req.body;

    // Write the updated data to the JSON file
    fs.writeFile(todosFilePath, JSON.stringify(updatedData, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).send('Failed to update todos');
        }
        res.send({ message: 'Todos updated successfully!' });
    });
})

app.delete('/todo/:id', (req, res) => {
    const todoId = req.params.id;

    // Read the current todos from the file
    fs.readFile(todosFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Failed to read todos');
        }

        const todos = JSON.parse(data);

        // Check if the todo exists
        if (!todos[todoId]) {
            return res.status(404).send({ message: `Todo with ID ${todoId} not found` });
        }

        // Delete the todo
        delete todos[todoId];

        // Write the updated todos back to the file
        fs.writeFile(todosFilePath, JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).send('Failed to update todos');
            }
            res.send({ message: `Todo with ID ${todoId} deleted successfully` });
        });
    });
});

const PORT = process.env.PORT || 8080
server.listen(PORT, err => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('listening ' + PORT)
})