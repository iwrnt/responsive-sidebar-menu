const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

const modeSwitch = document.getElementById("mode-switch");
const modeSwitchText = document.getElementById("mode-switch-text");
modeSwitch.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        modeSwitchText.innerHTML = "Dark Mode";
    } else {
        modeSwitchText.innerHTML = "Light Mode";
    }
    body.classList.toggle("dark");
});