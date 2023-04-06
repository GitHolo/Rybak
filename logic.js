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
  const searchInput = document.getElementById("search");
  const fishItems = document.querySelectorAll(".fish-item");
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
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
