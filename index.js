const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const connection = require('./db/connection');
const ObjectId = require('mongoose').Types.ObjectId;
const Task = require('./models/Task');

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

app.post('/createTask', async (req, res) => {
  const { name, description, done } = req.body;
  const insertedTask = await Task.collection.insertOne({
    name,
    description,
    done,
  });
  res.json(insertedTask);
});

app.post('/editTask', async (req, res) => {
  const { id, name, description, done } = req.body;
  const foundTask = await Task.collection.updateOne(
    { _id: ObjectId(id) },
    { $set: { name, description, done } }
  );
  res.json(foundTask);
});

app.post('/deleteTask', async (req, res) => {
  const { id } = req.body;
  const deletedTask = await Task.collection.deleteOne(
    { _id: ObjectId(id) },
  );
  res.json(deletedTask);
});


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});