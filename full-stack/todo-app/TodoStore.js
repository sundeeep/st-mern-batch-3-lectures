
let nextId = 1;

function Task(taskTitle, taskDesciption, isTaskDone){
    this.taskId = nextId++;
    this.taskTitle = taskTitle;
    this.taskDesciption = taskDesciption;
    this.isTaskDone = isTaskDone
}

function TodoStore(){
    this.todoStore = [];
}

TodoStore.prototype.saveTodo = function(taskTitle, taskDesciption, isTaskDone){ 
    const newTask = new Task(taskTitle, taskDesciption, isTaskDone);
    this.todoStore.push(newTask)
    return newTask;
}

TodoStore.prototype.getAllTodos = function(){
    return this.todoStore;
}

TodoStore.prototype.toggleTask = function(taskIdToUpdate){
    const taskWithId = this.todoStore.find((task)=>(task.taskId === taskIdToUpdate));
    taskWithId.isTaskDone = !taskWithId.isTaskDone
    
    // if(taskWithId){
    //     taskWithId.isTaskDone = false
    // }else{
    //     taskWithId.isTaskDone = true;
    // }
}


module.exports = {
    TodoStore,
    Task
}