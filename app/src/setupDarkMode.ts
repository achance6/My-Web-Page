const THEME_STORAGE_KEY = "theme";

/**
 * Possible values for the theme class on the HTML element.
 */
const Theme = {
  Dark: "dark",
  Light: "light"
} as const;
type Theme = typeof Theme[keyof typeof Theme];

/**
 * Sets up dark mode toggle functionality.
 */
export default function setupDarkMode() {
  // Initialize the theme immediately if DOM is ready, otherwise wait
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTheme);
  } else {
    initializeTheme();
  }

  // Add event listener for toggle button
  document
    .querySelector(".dark-mode-toggle__button")
    ?.addEventListener("click", darkModeToggle);

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      // Only auto-switch if the user hasn't manually set a preference
      const savedTheme = getSavedTheme();
      if (!savedTheme) {
        applyTheme(event.matches ? Theme.Dark : Theme.Light);
      }
    });
}

/**
 * Sets the initial theme based on user preference and saved theme.
 */
function initializeTheme() {
  const userPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const savedTheme = getSavedTheme();

  applyTheme(savedTheme ?? (userPrefersDark ? Theme.Dark : Theme.Light))
}

/**
 * Returns the saved {@link Theme} from localStorage, or null if no theme is saved.
 */
function getSavedTheme(): Theme | null {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const isValidTheme = (theme: string | null): theme is Theme =>
    theme === "dark" || theme === "light";

  return isValidTheme(savedTheme) ? savedTheme : null;
}

/**
 * Toggles between light and dark theme and saves the new theme to localStorage.
 */
function darkModeToggle() {
  const isDark = document.documentElement.classList.contains("dark" as Theme);
  const newTheme = isDark ? Theme.Light : Theme.Dark;

  applyTheme(newTheme);
  localStorage.setItem(THEME_STORAGE_KEY, newTheme);
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove(Theme.Dark, Theme.Light);
  document.documentElement.classList.add(theme);

  const isDark = theme === Theme.Dark;
  setDarkModeIndicator(isDark);
}

/**
 * Sets the dark mode textual indicator text to either "ON" or "OFF"
 */
function setDarkModeIndicator(isDark: boolean) {
  const darkModeToggleTextElement = document.querySelector(
    ".dark-mode-toggle__indicator"
  ) as HTMLElement | null;

  if (!darkModeToggleTextElement) {
    console.warn("Dark mode indicator element not found");
    return;
  }

  if (isDark) {
    darkModeToggleTextElement.textContent = "ON"
  } else {
    darkModeToggleTextElement.textContent = "OFF"
  }
}
