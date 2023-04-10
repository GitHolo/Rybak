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
document.addEventListener("DOMContentLoaded", function () {
  const fishItems = document.querySelectorAll(".fish-item");
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  document.body.appendChild(tooltip);
  fishItems.forEach((fishItem) => {
    fishItem.addEventListener("mouseenter", (event) => {
      const description = fishItem.dataset.description;
      const imgSrc = fishItem.querySelector("img").getAttribute("src");
      const tooltipContent = `
      <div class="tooltip-image-container">
        <img src="${imgSrc}" alt="Fish Image">
      </div>
      <div class="tooltip-description">${description}</div>
    `;
      tooltip.innerHTML = tooltipContent;
      tooltip.style.display = "block";
    });

    fishItem.addEventListener("mousemove", (event) => {
      tooltip.style.left = `${event.pageX + 10}px`;
      tooltip.style.top = `${event.pageY + 10}px`;
    });

    fishItem.addEventListener("mouseleave", (event) => {
      tooltip.style.display = "none";
    });
  });
});
