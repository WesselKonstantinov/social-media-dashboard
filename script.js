const toggleSwitch = document.querySelector(".js-toggle");

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.firstElementChild.classList.toggle("dark-mode");
  toggleSwitch.setAttribute("checked", "");
  toggleSwitch.setAttribute("aria-checked", "true");
} else if (currentTheme === "light") {
  document.firstElementChild.classList.toggle("light-mode");
  toggleSwitch.removeAttribute("checked");
  toggleSwitch.setAttribute("aria-checked", "false");
}

toggleSwitch.addEventListener("change", (e) => {
  if (prefersDarkScheme.matches) {
    document.firstElementChild.classList.toggle("light-mode");
  }

  const theme = e.target.checked ? "dark" : "light";
  if (theme === "dark") {
    document.firstElementChild.classList.add("dark-mode");
    document.firstElementChild.classList.remove("light-mode");
    e.target.setAttribute("aria-checked", "true");
  } else if (theme === "light") {
    document.firstElementChild.classList.add("light-mode");
    document.firstElementChild.classList.remove("dark-mode");
    e.target.removeAttribute("checked");
    e.target.setAttribute("aria-checked", "false");
  }
  localStorage.setItem("theme", theme);
});
