const DARK_MODE_CLASS = "dark";
const LIGHT_MODE_CLASS = "light";
const THEME_STORAGE_KEY = "theme";

export function setupDarkMode() {
  document
    .querySelector(".dark-mode-toggle__button")
    ?.addEventListener("click", darkModeToggle);

  document.addEventListener("DOMContentLoaded", () => {
    const userPrefersDark = matchMedia("(prefers-color-scheme: dark)").matches;

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      document.documentElement.className = savedTheme;
    } else {
      document.documentElement.className = userPrefersDark
        ? DARK_MODE_CLASS
        : LIGHT_MODE_CLASS;
    }
    setDarkModeIndicator();
  });
}

function darkModeToggle() {
  const currentTheme = document.documentElement.className;
  const newTheme =
    currentTheme === DARK_MODE_CLASS ? LIGHT_MODE_CLASS : DARK_MODE_CLASS;
  document.documentElement.className = newTheme;
  localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  setDarkModeIndicator();
}

/**
 * Sets the dark mode indicator text to either "ON" or "OFF"
 */
function setDarkModeIndicator() {
  const darkModeToggleTextElement = document.querySelector(
    ".dark-mode-toggle__indicator"
  );
  if (
    !darkModeToggleTextElement ||
    !(darkModeToggleTextElement instanceof HTMLElement)
  ) {
    console.error("Dark mode indicator was undefined");
    return;
  }
  document.documentElement.className === DARK_MODE_CLASS
    ? (darkModeToggleTextElement.innerText = "ON")
    : (darkModeToggleTextElement.innerText = "OFF");
}
