/**
 * Opens the task modal with pre-filled task data.
 * @param {Object} task - The task object to edit.
 */

export function setupSidebarToggle() {
  const sideBar = document.getElementById("side-bar-div");
  const hideBtn = document.getElementById("hide-sidebar-btn");
  const showBtn = document.getElementById("show-sidebar-btn");

  hideBtn.addEventListener("click", () => {
    sidebar.classList.add("hidden");
    hideBtn.style.display = "none";
    showBtn.style.display = "block";
  });

  showBtn.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
    showBtn.style.display = "none";
    hideBtn.style.display = "block";
  });
}

/**mobile side bar */

export function setupMobileMenu() {
  const menuIcon = document.getElementById("mobile-menu-icon");
  const sidebar = document.getElementById("side-bar-div");

  menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}
