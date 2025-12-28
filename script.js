document.addEventListener("DOMContentLoaded", () => {

  /* Smooth scrolling */
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* Project filtering */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Map button filters to card classes
  const filterMap = {
    all: "all",
    ml: "ai",
    bi: "analytics"
  };

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active button
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const mappedClass = filterMap[filter];

      projectCards.forEach(card => {
        if (
          filter === "all" ||
          card.classList.contains(mappedClass)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

});
