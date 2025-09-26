import { updateTask, deleteTask } from "../tasks/taskManager.js";

/**
 * Opens the task modal with pre-filled data and wires up actions.
 * @param {Object} task - The task to edit.
 */
export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");
  const prioritySelect = document.getElementById("task-priority");
  const saveBtn = document.getElementById("save-task-btn");
  const deleteBtn = document.getElementById("delete-task-btn");

  // Populate fields
  titleInput.value = task.title || "";
  descInput.value = task.description || "";
  statusSelect.value = task.status || "todo";
  prioritySelect.value = task.priority || "medium";

  // Save changes
  saveBtn.onclick = () => {
    updateTask(task.id, {
      title: titleInput.value.trim(),
      description: descInput.value.trim(),
      status: statusSelect.value,
      priority: prioritySelect.value,
    });
    modal.close();
  };

  // Delete task with confirmation
  deleteBtn.onclick = () => {
    const ok = confirm("Are you sure you want to delete this task?");
    if (ok) {
      deleteTask(task.id);
      modal.close();
    }
  };

  modal.showModal();
}

/**
 * Wires up closing behavior for dialogs (task modal, new task modal).
 */
export function setupModalCloseHandler() {
  const modals = document.querySelectorAll("dialog");
  modals.forEach((modal) => {
    const closeBtn = modal.querySelector("[data-close]");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.close());
    }
  });
}

/**
 * Wires up the '+ Add New Task' button to open the creation modal.
 */
export function setupNewTaskModalHandler() {
  const addBtn = document.getElementById("add-new-task-btn");
  const modal = document.getElementById("new-task-modal");
  if (!addBtn || !modal) return;
  addBtn.addEventListener("click", () => modal.showModal());
}
