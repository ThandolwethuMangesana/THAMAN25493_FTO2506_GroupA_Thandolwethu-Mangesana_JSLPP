import { loadTasksFromStorage, saveTasksToStorage } from "./utils/localStorage.js";
import { fetchTasksFromAPI } from "./utils/api.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import { setupModalCloseHandler, setupNewTaskModalHandler, openTaskModal } from "./ui/modalHandlers.js";
import { setupSidebarToggle, setupMobileMenu } from "./ui/sidebarHandler.js";
import { setupThemeToggle } from "./ui/themeHandler.js";

/**
 * Shows a transient status message (loading or error).
 */
function showStatus(type, message) {
  const banner = document.getElementById("status-banner");
  if (!banner) return;
  banner.textContent = message;
  banner.setAttribute("data-type", type);
  banner.style.display = "block";
}

/**
 * Hides the status banner.
 */
function hideStatus() {
  const banner = document.getElementById("status-banner");
  if (!banner) return;
  banner.style.display = "none";
  banner.textContent = "";
  banner.removeAttribute("data-type");
}

/**
 * Initializes the Kanban board:
 * - Loads tasks from API (with loading/error states), falls back to localStorage
 * - Persists tasks to localStorage
 * - Renders UI and wires up handlers
 */
async function initTaskBoard() {
  showStatus("loading", "Loading tasks…");
  let tasks = [];

  try {
    const apiTasks = await fetchTasksFromAPI();
    if (Array.isArray(apiTasks) && apiTasks.length > 0) {
      saveTasksToStorage(apiTasks);
      tasks = apiTasks;
    } else {
      tasks = loadTasksFromStorage();
    }
  } catch (err) {
    showStatus("error", "Fetch Failed");
    tasks = loadTasksFromStorage();
  } finally {
    hideStatus();
  }

  clearExistingTasks();
  renderTasks(tasks);

  // Handlers
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupSidebarToggle();
  setupMobileMenu();
  setupThemeToggle();

  // Expose modal open for cards
  window.openTaskModal = openTaskModal;
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
