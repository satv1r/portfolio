let indic = document.getElementById("scroll");
const scrollPos = 100;

const scrolly = () => {
  let windowY = window.scrollY;
  if (windowY > scrollPos) {
    indic.style.display = "none";
  } else {
    indic.style.display = "flex";
  }
};

window.addEventListener("scroll", scrolly);
