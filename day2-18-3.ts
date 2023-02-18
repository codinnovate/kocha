// This TypeScript code snippet demonstrates how to create a simple class to manage
// a list of tasks, emphasizing the use of interfaces and generics for type safety.

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

class TaskManager<T extends Task> {
  private tasks: T[] = [];

  // Adds a new task to the task list
  addTask(task: T): void {
    this.tasks.push(task);
  }

  // Retrieves a list of all tasks
  getTasks(): T[] {
    return this.tasks;
  }

  // Marks a task as completed by its ID
  completeTask(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
    }
  }
}

// Example usage
const taskManager = new TaskManager<Task>();

taskManager.addTask({ id: 1, description: "Learn TypeScript", completed: false });
taskManager.addTask({ id: 2, description: "Write Code", completed: false });

console.log(taskManager.getTasks());

taskManager.completeTask(1);

console.log(taskManager.getTasks());