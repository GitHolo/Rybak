function startButton() {
  const startButtonElement = document.getElementById("startButton");
  startButtonElement.addEventListener("click", startButton);
  const contentBackground = document.querySelector(".content-background");
  const contentTop =
    contentBackground.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: contentTop,
    behavior: "smooth",
  });
}
function search() {
  // Select the search input and fish items
  const searchInput = document.getElementById("search");
  const fishItems = document.querySelectorAll(".fish-item");

  // Add an event listener to the search input
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    // Loop through the fish items and hide/show them based on the input value
    fishItems.forEach((item) => {
      const fishName = item
        .querySelector(".fish-name")
        .textContent.toLowerCase();
      if (searchValue === "" || fishName.includes(searchValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
}
