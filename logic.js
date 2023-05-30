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
  const viewportWidth = window.innerWidth;
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
      const tooltipWidth = tooltip.offsetWidth;
      if (event.clientX + tooltipWidth > viewportWidth) {
        tooltip.style.left = `${event.clientX - tooltipWidth - 20}px`;
      } else {
        tooltip.style.left = `${event.clientX + 20}px`;
      }
      tooltip.style.top = `${event.clientY}px`;
    });

    fishItem.addEventListener("mousemove", (event) => {
      const tooltipWidth = tooltip.offsetWidth;
      if (event.clientX + tooltipWidth > viewportWidth) {
        tooltip.style.left = `${event.clientX - tooltipWidth - 20}px`;
      } else {
        tooltip.style.left = `${event.clientX + 20}px`;
      }
      tooltip.style.top = `${event.clientY}px`;
    });

    fishItem.addEventListener("mouseleave", (event) => {
      tooltip.style.display = "none";
    });
  });
  const sourceElement = document.querySelector(".about-content");
  const targetElement = document.querySelector(".about");
  const additionalPixelsElement = document.getElementById("additionalPixels");
  const additionalPixels = parseInt(additionalPixelsElement.dataset.value);
  const minWidth = 1402; // Minimum window width for the additional pixels to be applied

  let initialSourceHeight = 0;

  function setInitialSourceHeight() {
    initialSourceHeight = sourceElement.offsetHeight;
  }

  function setTargetElementHeight() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (windowWidth >= minWidth) {
      const targetElementHeight = initialSourceHeight + additionalPixels;
      targetElement.style.height = `${targetElementHeight}px`;
    } else {
      targetElement.style.height = ""; // Reset the height to default
    }
  }

  // Set the initial source element height
  setInitialSourceHeight();

  // Call the function initially to set the target element's height
  setTargetElementHeight();

  // Attach an event listener to the window resize event
  window.addEventListener("resize", setTargetElementHeight);
});
