const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");
const mainImage = document.querySelector(".main_img img");
console.log(mainImage);

let activeImageSlide = 0;

productImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    productImages[activeImageSlide].classList.remove("active");
    item.classList.add("active");
    // productImageSlide.style.backgroundImage = `url('€{item.src}')`;
    mainImage.src = item.src;
    //  mainImage.style.opacity = '0'
    activeImageSlide = i;
  });
});

// toggle size buttons

const sizeBtns = document.querySelectorAll(".size-radio-btn");
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    sizeBtns[checkedBtn].classList.remove("check");
    item.classList.add("check");
    checkedBtn = i;
  });
});
