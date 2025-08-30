function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// traditional Way.....
// document.getElementById("btn-addToCart").addEventListener("click", function () {
//   const title = getElement("card-title1").innerText;
//   const price = getElement("card-price1").innerText;

//   const totalPrice = getElement("total-price").innerText;
//   carrentTotal = Number(price) + Number(totalPrice);

//   getElement("total-price").innerText = carrentTotal.toFixed(2);

//   const cartContainer = getElement("cart-container");
//   const newCart = document.createElement("div");
//   newCart.innerHTML = `
//     <div class="m-4 bg-gray-100 rounded-xl flex justify-center items-center gap-3 p-2">
//                 <img class="w-20" src="./assets/kitchen-1.png" alt="">
//                 <div>
//                   <h3 class="font-bold">${title}</h3>
//                   <p>${price} Tk</p>
//                 </div>
//               </div>
//   `;
//   cartContainer.appendChild(newCart);
// });

// traverse technique

const cartBtns = document.getElementsByClassName("cart-btn");
for (const cartButton of cartBtns) {
  cartButton.addEventListener("click", function () {
    // using chatgpt
    const card = cartButton.closest(".card"); // card container খুঁজে আনলো
    const productImg = card.querySelector("img").src;
    const productTitle = card.querySelector(".card-title").innerText;
    const productPrice = card.querySelector("p span").innerText.trim(); //....

    // const productImg =
    //   cartButton.parentNode.parentNode.children[0].children[0].src;
    // const productTitle =
    //   cartButton.parentNode.parentNode.children[1].children[0].innerText;
    // const productPrice =
    //   cartButton.parentNode.parentNode.children[1].children[2].children[0]
    //     .innerText.trim();

    const totalPrice = getElement("total-price").innerText.trim();

    const currentTotal = Number(productPrice) + Number(totalPrice);
    getElement("total-price").innerText = currentTotal;

    const cartContainer = getElement("cart-container");

    const newCart = document.createElement("div");
    newCart.innerHTML = `
      <div class="m-4 bg-gray-100 rounded-xl flex justify-center items-center gap-3 p-2">
        <img class="w-20" src="${productImg}" alt="">
          <div>
            <h3 class="font-bold">${productTitle}</h3>
            <p>${productPrice} Tk</p>
         </div>
      </div>
    `;
    cartContainer.appendChild(newCart);

    const quantity = getElement("total-quantity").innerText;
    const currentQuantity = Number(quantity) + 1;
    getElement("total-quantity").innerText = currentQuantity;
  });
}

document.getElementById("btn-clear").addEventListener("click", function () {
  const cartContainer = getElement("cart-container");
  cartContainer.innerHTML = "";
  getElement("total-quantity").innerText = 0;
  getElement("total-price").innerText = 0;
});
