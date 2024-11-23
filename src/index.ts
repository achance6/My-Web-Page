document.getElementById("toggle-dark-mode-button")?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    toggleDarkModeIndicator();
})

document.addEventListener("DOMContentLoaded", () => {
    toggleDarkModeIndicator();
})

function toggleDarkModeIndicator() {
    let darkModeToggleTextElement = document.getElementById("dark-mode-indicator");
    if (!darkModeToggleTextElement) {
        console.error("Dark mode button was undefined");
        return;
    }
    if (document.documentElement.classList.contains("dark")) {
        darkModeToggleTextElement.innerText = "ON";
    } else {
        darkModeToggleTextElement.innerText = "OFF";
    }
}