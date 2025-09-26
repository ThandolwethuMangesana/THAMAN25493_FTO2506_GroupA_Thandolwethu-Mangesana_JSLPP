/**
 * Desktop sidebar toggle: hide/show sidebar.
 */
export function setupSidebarToggle() {
  const sidebar = document.getElementById("side-bar-div");
  const hideBtn = document.getElement("hide-sidebar-btn");
  const showBtn = document.getElementById("show-sidebar-btn");
  if (!sidebar || !hideBtn || !showBtn) return;

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

export function setupMobileMenu() {
  const menuIcon = document.getElementById("mobile-menu-icon");
  const sidebar = document.getElementById("side-bar-div");
  if (!menuIcon || !sidebar) return;

  menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}
