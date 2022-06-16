const Task = require("../src/Task.js")

let task
task = new Task()

class TaskList {

  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  getOverdueTasks() {
    const today = new Date()
    const overdueTasks = []
    for (const task of this.tasks) {
      //it's not been completed
      if (task.isIncomplete()) {
        //if it has a due date
        if (task.getDateDue() !== null) {
          //if the due date has passed then the task is overdue
          if (today > task.getDateDue()) {
            overdueTasks.push(task)
          }
        }
      }
    }

    return overdueTasks
  }
}

module.exports = TaskList