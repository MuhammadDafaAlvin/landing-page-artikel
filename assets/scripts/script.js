// Dark mode functionality
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check for saved user preference
const darkMode = localStorage.getItem("darkMode");

// Function to enable dark mode
const enableDarkMode = () => {
  body.classList.add("dark-mode");
  darkModeToggle.innerHTML = '<i class="ph ph-moon"></i>';
  localStorage.setItem("darkMode", "enabled");
};

// Function to disable dark mode
const disableDarkMode = () => {
  body.classList.remove("dark-mode");
  darkModeToggle.innerHTML = '<i class="ph ph-sun"></i>';
  localStorage.setItem("darkMode", null);
};

// Initialize dark mode based on saved preference
if (darkMode === "enabled") {
  enableDarkMode();
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Existing menu toggle code
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
