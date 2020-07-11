const Schema = require('mongoose').Schema;

const TaskSchema = Schema({

  name: String,
  description: String,
  _id: Schema.Types.ObjectId

});

const Task = db.model('tasks', TaskSchema);

module.exports = Task;