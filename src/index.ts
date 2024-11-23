const DARK_MODE_CLASS = "dark";
const LIGHT_MODE_CLASS = "light";

document.getElementById("toggle-dark-mode-button")?.addEventListener("click", () => {
    const currentTheme = document.documentElement.className;
    const newTheme = currentTheme === DARK_MODE_CLASS ? LIGHT_MODE_CLASS : DARK_MODE_CLASS;
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
    setDarkModeIndicator();

})

document.addEventListener("DOMContentLoaded", () => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.className = savedTheme;
    } else {
        document.documentElement.className = userPrefersDark ? DARK_MODE_CLASS : LIGHT_MODE_CLASS;
    }
    setDarkModeIndicator();
})

function setDarkModeIndicator() {
    let darkModeToggleTextElement = document.getElementById("dark-mode-indicator");
    if (!darkModeToggleTextElement) {
        console.error("Dark mode indicator was undefined");
        return;
    }
    document.documentElement.className === DARK_MODE_CLASS ?
        darkModeToggleTextElement.innerText = "ON" :
        darkModeToggleTextElement.innerText = "OFF";
}