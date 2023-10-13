const cartCount = $(".cart-count"),
  cartContainer = $("#cart-container"),
  totalBill = $(".total-bill"),
  cartBtnWrapper = $(".cart-btn-wrapper"),
  main = $("main");
let basket = JSON.parse(localStorage.getItem("data")) || [],
  count = 0,
  amount = 0;

let generateCartItems = () => {
  if (basket.length !== 0) {
    totalBill.removeClass("fs-1").addClass("fs-3");
    cartBtnWrapper.html(
      ` <button onclick="checkOut()" class="text-capitalize btn btn-success me-2">checkout</button>
        <button onclick="clearCart()" class="text-capitalize btn btn-danger">clear cart</button>`
    );
    cartContainer.html(
      basket.map((element) => {
        let { id, item } = element;
        let search = shopItems.find((item) => item.id === id) || [];
        let { img, price, name } = search;
        return ` <div id="cart-id-${
          search.id
        }" class="card rounded shadow flex-row">
        <img src=${img}
            alt="" class="img-fluid p-1">
        <div class="w-100">
            <div class="d-flex flex-wrap align-items-center justify-content-between px-1">
                <span class="text-capitalize fw-semibold">${name} </span>
                <span class="badge bg-dark fs-6">₹${price}</span>
                <span onclick="removeItem(${id})" class="fs-3 fw-light mb-1 pointer">x</span>
            </div>
            <div class="d-flex gap-2 fs-5">
              <p onclick="decrementItemCount(${id})" class="mb-0 pointer px-1">-</p>
              <p id=${id} class="mb-0">${item}</p>
              <p onclick="incrementItemCount(${id})" class="mb-0 pointer px-1">+</p>
            </div>
            <p class="mb-0 fw-bold fs-4 text-dark">₹${item * price}</p>
</div> `;
      })
    );
  } else {
    totalBill.removeClass("fs-3").addClass("fs-1");
    totalBill.text("cart is empty");
    cartBtnWrapper.html(
      `<a href="index.html"><button class="text-capitalize btn btn-dark me-2 mt-2">back to home</button></a>`
    );
    $(".card").addClass("d-none");
  }
};
generateCartItems();

let incrementItemCount = (id) => {
  let selectedItem = id;
  let search = basket.find((item) => item.id === selectedItem.id);
  if (search === undefined) {
    basket.push({ id: selectedItem.id, item: 1 });
  } else {
    search.item += 1;
  }
  update(selectedItem.id);
  totalAmount();
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrementItemCount = (id) => {
  let selectedItem = id;
  let search = basket.find((item) => item.id === selectedItem.id);
  if (search === undefined) return;
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((item) => item.item !== 0);
  totalAmount();
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((item) => item.id === id);
  if (search === undefined) return;
  $(`#${id}`).text(search.item);
  calculateQuantity();
};

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((element) => element.id !== selectedItem.id);
  generateCartItems();
  calculateQuantity();
  totalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

let calculateQuantity = () => {
  count = basket
    .map((item) => item.item)
    .reduce((item, sum) => (sum += item), 0);
  cartCount.text(count);
};
calculateQuantity();

let totalAmount = () => {
  if (basket.length !== 0) {
    amount = basket
      .map((element) => {
        let { item, id } = element;
        let search = shopItems.find((item) => item.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    totalBill.text(`total bill : ₹${amount}`);
  } else return;
};
totalAmount();

let clearCart = () => {
  basket = [];
  generateCartItems();
  calculateQuantity();
  localStorage.setItem("data", JSON.stringify(basket));
};

let checkOut = () => {
  cartContainer.addClass("d-none");
  main.append(checkOutContainer);
  updateCheckOutContainer();
};

let buyBtn = () => {
  let confirmBuy = confirm("Are you sure you want to buy?");
  if (!confirmBuy) return;
  alert("Your order was successfully purchased");
  clearCart();
};

let closeCheckOut = () => {
  checkOutContainer.remove();
  cartContainer.removeClass("d-none");
};

const checkOutContainer = $(
  `<div id="checkout-container" class="card position-absolute mt-md-4"></div>`
);

const updateCheckOutContainer = () => {
  checkOutContainer.empty();
  let content = `
  <div class="d-flex justify-content-between px-3 align-items-center ">
    <h3 class="pt-3 fw-bold">Checkout</h3>
    <span onclick="closeCheckOut()" class="fs-2 fw-bold pointer">x</span>
  </div>
  <p class="text-capitalize fw-semibold ms-4 mb-1 fs-5 text-black">payment method</p>
  <div class="d-flex align-items-center flex-column gap-2 mb-2 px-2">
      <div class="text-capitalize p-2 align-content-center form-check pointer card flex-row payment-card">
          <img src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"
          alt="visa" class="me-2">
          <label class="mb-0 mt-1  form-check-label pointer flex-grow-1" for="payment1">visa payment</label>
          <input class="form-check-input mt-2 ms-2" type="radio" name="payment" id="payment1" checked>
      </div>
      <div class="text-capitalize p-2 align-content-center form-check pointer card flex-row payment-card">
          <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png"
          alt="gpay" class="me-2">
          <label class="mb-0 mt-1 form-check-label pointer flex-grow-1" for="payment2">google pay</label>
          <input class="form-check-input mt-2 ms-2" type="radio" name="payment" id="payment2">
      </div>
      <div class="text-capitalize p-2 align-content-center form-check pointer card flex-row payment-card">
          <img src="https://cdn.freebiesupply.com/images/thumbs/2x/mastercard-logo.png"
          alt="mastercard" class="me-2">
          <label class="mb-0 mt-1 form-check-label pointer flex-grow-1" for="payment3">master card</label>
          <input class="form-check-input mt-2 ms-2" type="radio" name="payment" id="payment3">
      </div>
  </div>
  <p class="text-capitalize fw-semibold mb-0 ms-4 fs-5 text-black">total items : ${basket.length}</p>
  <p class="text-capitalize fw-semibold mb-0 ms-4 fs-5 text-black">total quantity : ${count}</p>
  <p class="text-capitalize fw-semibold mb-2 ms-4 fs-5 text-black">total amount : ₹${amount}</p> 
  <button onclick="buyBtn()"  class="text-capitalize fw-semibold text-light rounded btn d-block mx-auto mb-2"><i class="fa-solid fa-bag-shopping me-2"></i>buy now</button>`;
  checkOutContainer.append(content);
};
