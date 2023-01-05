// This TypeScript code snippet demonstrates how to filter and sort an array of objects.
// The use-case here is to manage a list of tasks with priorities.

type Task = {
  title: string;
  priority: number;
  completed: boolean;
};

// Sample array of tasks
const tasks: Task[] = [
  { title: 'Task 1', priority: 2, completed: false },
  { title: 'Task 2', priority: 1, completed: true },
  { title: 'Task 3', priority: 3, completed: false },
  { title: 'Task 4', priority: 1, completed: false },
];

// Filter tasks to get only the pending ones
const pendingTasks = tasks.filter(task => !task.completed);

// Sort the pending tasks by priority (ascending order)
pendingTasks.sort((a, b) => a.priority - b.priority);

console.log('Pending Tasks Sorted by Priority:', pendingTasks);