import { loadTasksFromStorage, saveTasksToStorage } from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";

/**
 * Sorts tasks by priority (High → Medium → Low).
 * @param {Array<Object>} tasks - The tasks to sort.
 * @returns {Array<Object>} Sorted tasks.
 */
function sortByPriority(tasks) {
  const order = { high: 1, medium: 2, low: 3 };
  return [...tasks].sort((a, b) => order[a.priority] - order[b.priority]);
}

/**
 * Updates an existing task in localStorage and re-renders the board.
 * @param {number|string} taskId - The ID of the task to update.
 * @param {Object} updates - The updated fields { title, description, status, priority }.
 */
export function updateTask(taskId, updates) {
  const tasks = loadTasksFromStorage();
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, ...updates } : task
  );
  saveTasksToStorage(updatedTasks);
  clearExistingTasks();
  renderTasks(sortByPriority(updatedTasks));
}

/**
 * Deletes a task by ID from localStorage and re-renders the board.
 * @param {number|string} taskId - The ID of the task to delete.
 */
export function deleteTask(taskId) {
  const tasks = loadTasksFromStorage();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  saveTasksToStorage(updatedTasks);
  clearExistingTasks();
  renderTasks(sortByPriority(updatedTasks));
}
