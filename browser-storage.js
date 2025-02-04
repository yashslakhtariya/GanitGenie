document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    let isDarkMode = false;

    const systemPreferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (systemPreferredTheme) {
        document.body.classList.add("dark-mode");
        isDarkMode = true;
    } else {
        document.body.classList.remove("dark-mode");
    }

    themeToggleButton.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("dark-mode", isDarkMode);
    });
});
