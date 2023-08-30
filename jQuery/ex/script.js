const viewFrame = document.querySelector(".view-frame");
const imgList = document.querySelectorAll(".img-container img");

imgList.forEach(img => {
  img.addEventListener("click", function () {
    const selectedLi = document.querySelector("li.selected");
    const currentImg = this;

    viewFrame.innerHTML = '';
    viewFrame.appendChild(currentImg.cloneNode(true));

    if (selectedLi) {
      selectedLi.classList.remove("selected");
    }
    currentImg.parentElement.classList.add("selected");
  });
});