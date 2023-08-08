var swiper1 = document.querySelector(".mySwiper");

// Get references to the images
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");
var image4 = document.getElementById("image4");
var popUpImage = document.getElementById("popup");
var bg = document.querySelector(".bg");
var close = document.getElementById("close");

[image1, image2, image3, image4].forEach(image => {
  image.addEventListener("click", function () {
    if (
      popUpImage.style.display === "none" ||
      popUpImage.style.display === ""
    ) {
      bg.style.display = "block";
      close.style.display = "block";
      popUpImage.style.display = "block";
    } else {
      bg.style.display = "none";
      close.style.display = "none";
      popUpImage.style.display = "none";
    }
  });
});

function handleClose() {
  if (popUpImage.style.display === "block") {
    bg.style.display = "none";
    popUpImage.style.display = "none";
  }
}

function handleMinusQuantity() {
  var quantityAdd = document.getElementById("quantity-value");
  var currentQuantity = parseInt(quantityAdd.innerHTML);
  if (currentQuantity > 0) {
    currentQuantity--;
    quantityAdd.innerHTML = currentQuantity;
  }
}
function handlePlusQuantity() {
  var quantityAdd = document.getElementById("quantity-value");
  var currentQuantity = parseInt(quantityAdd.innerHTML);
  if (currentQuantity < 5) {
    currentQuantity++;
    quantityAdd.innerHTML = currentQuantity;
  }
}

function handleAddToCart() {
  var cart = document.querySelector(".addToCart");

  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}
var cart = document.getElementById("Add-To-Cart");
var product = document.getElementById("product");
var message = document.querySelector(".message");
var checkOut = document.querySelector(".checkout");
var notif = document.querySelector(".notification");
cart.addEventListener("click", handleCart);

function handleCart() {
  var addCart = document.querySelector(".addToCart");
  var productPrice = document.querySelector(".productPrice");

  var totalPrice = document.getElementById("totalPrice");
  var quantityValue = document.getElementById("quantity-value").textContent;
  var totalQuantity = document.getElementById("totalQuantity");

  var clicked = true;

  if (clicked && quantityValue > 0) {
    productPrice.style.display = "block";
    product.style.display = "flex";
    message.style.display = "none";
    totalPrice.innerHTML = quantityValue * 125;
    totalQuantity.innerHTML = quantityValue;
    checkOut.style.display = "block";
    notif.style.display = "block";
    addCart.style.display = "block";
  } else {
    addCart.style.display = "block";
  }
}

function handleDeleteCart() {
  product.style.display = "none";
  checkOut.style.display = "none";
  message.style.display = "block";
  notif.style.display = "none";
}
