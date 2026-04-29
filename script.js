const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {

  function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      toggleBtn.textContent = "🌙 Dark";
    } else {
      document.body.classList.remove("light-mode");
      toggleBtn.textContent = "☀ Light";
    }
  }

  loadTheme();

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙 Dark";
    } else {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀ Light";
    }
  });

}
const searchInput = document.getElementById("searchInput");
const searchCards = document.querySelectorAll(".card-link");
const subjectsSection = document.querySelector(".subjects");
const noResults = document.getElementById("noResults");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    let found = false;

    searchCards.forEach(card => {
      const keywords = card.getAttribute("data-search").toLowerCase();

      if (keywords.includes(value)) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (value.trim() !== "") {
      subjectsSection.scrollIntoView({
        behavior: "smooth"
      });
    }

    if (!found && value.trim() !== "") {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  });
}