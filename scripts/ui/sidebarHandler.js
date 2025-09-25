export function setupSidebarToggle() {
    const sideBar = document.getElementById("side-bar-div");
    const hideBtn = document.getElementById("hide-sidebar-btn");
    const showBtn = document.getElementById("show-sidebar-btn");

     hideBtn.addEventListener("click", () => {
    sidebar.classList.add("hidden");
    hideBtn.style.display = "none";
    showBtn.style.display = "block";
  });
}