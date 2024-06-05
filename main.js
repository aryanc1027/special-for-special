const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// Function to detect if the device is iOS
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// Function to shrink the button
function shrinkButton(button) {
  const currentWidth = button.offsetWidth;
  const currentHeight = button.offsetHeight;
  const shrinkFactor = 0.9; // Shrink by 10%

  button.style.width = `${currentWidth * shrinkFactor}px`;
  button.style.height = `${currentHeight * shrinkFactor}px`;
}

btnNo.addEventListener("mouseover", (event) => {
  if (!isIOS()) {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;
    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
      newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
      newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
  }
});

btnNo.addEventListener("click", (e) => {
  if (isIOS()) {
    shrinkButton(btnNo);
  }
});

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});