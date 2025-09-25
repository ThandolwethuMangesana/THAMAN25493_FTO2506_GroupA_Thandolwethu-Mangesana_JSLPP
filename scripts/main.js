import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

/**importing setup side bar */
import { setupSidebarToggle } from "./ui/sidebarHandler.js";

/**imoprting mobile sidebar menu */
import { setupMobileMenu } from "./ui/sidebarHandler.js";

/**impoting theme toggle */
import { setupThemeToggle } from "./ui/themeHandler.js";



function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  setupSidebarToggle();
  setupMobileMenu();
   setupThemeToggle();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
