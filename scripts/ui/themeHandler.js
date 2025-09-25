export function setupThemeToggle() {
  const toggle = document.getElementById("theme-toggle");

  toggle.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // load saved theme
  const saved = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", saved);
}
