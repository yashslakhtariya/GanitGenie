document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");
    const themeToggle = document.getElementById("theme-toggle");
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    let isDarkMode = false;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (value === "C") {
                display.value = "";
            } else if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else if (value === "GST 18%") {
                display.value = (parseFloat(display.value) * 1.18).toFixed(2);
            } else if (["sin", "cos", "tan", "sqrt", "log"].includes(value)) {
                const result = calculateScientific(value, parseFloat(display.value));
                display.value = result !== null ? result : "Error";
            } else {
                display.value += value;
            }
        });
    });

    themeToggle.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("dark-mode", isDarkMode);
    });

    menuToggle.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});

function calculateScientific(func, value) {
    if (isNaN(value)) return null;
    switch (func) {
        case "sin": return Math.sin(value);
        case "cos": return Math.cos(value);
        case "tan": return Math.tan(value);
        case "sqrt": return Math.sqrt(value);
        case "log": return Math.log(value);
        default: return null;
    }
}
