class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description) {
        let date =  new Date().toLocaleString(); 
        this.tasks.push({
            title,
            id: this.tasks.length + 1,
            isComplited:'false',
            description,
            taskDate: date + '',
            priority: true,
        })
    }

    deleteTask(id) {
        return this.tasks = this.tasks.filter((item) => item.id !== id);
    }

    completeTask(id, isComplited, title,description,priority) {
        this.tasks = this.tasks.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    isComplited,
                    title,
                    description, 
                    priority,                  
                }
            }
            return item;
        })
    }

    edit(task) {
        const { id, title, description, taskDate, isCompleted, priority } = task;
        this.tasks = this.tasks.map((item) => {
          if (item.id === id) {
            return {
              ...i,
              title,
              description,
              taskDate,
              priority,
              isCompleted,
            };
          }
          return item;
        });
      }

    showAllTasks() {
        return this.tasks
    }

    sortDate() {
        this.tasks =  this.tasks.sort((a, b) => {
            if (a.date.toLowerCase() < b.date.toLowerCase()) {
              return -1;
            }
            if (a.date.toLowerCase() > b.date.toLowerCase()) {
              return 1;
            }
            return 0;
        });
}

    titleSort() {
        this.tasks =  this.tasks.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            }
            return 0;
        });
    }

    prioritySort() {
        this.tasks = this.tasks.sort((a,b) => a.priority > b.priority ? 1 : -1)
    }
  
}


const todo = new TodoList();

todo.addTask('Выучить JS','разобраться с классами');
todo.addTask('Выучить React','изучить документацию');
todo.addTask('Выучить Angular','изучить документацию');
todo.completeTask(1,'true','Выучить JS','разобраться с ооп','false')
// todo.titleSort()
todo.prioritySort()
console.log(todo.showAllTasks());
