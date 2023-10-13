const container = $("main"),
  cartCount = $(".cart-count");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateItems = () => {
  container.append(
    shopItems.map((item) => {
      let { id, name, price, desc, img } = item;
      let search = basket.find((item) => item.id === id) || [];
      return `<div id="product-id-${id}" class="card rounded shadow">
        <img class="img-fluid rounded"
            src="${img}"
            alt="item-card">
        <h2 class="fw-semibold fs-4 text-center text-capitalize mt-2">${name}</h2>
        <p class="mb-0 px-2">${desc}</p>
        <div class="d-flex justify-content-between px-2 fs-4 py-1">
            <p class="mb-0 fw-bold ms-1">₹${price}</p>
            <div class="d-flex gap-2 fs-5">
                <p onclick="decrementItem(${id})" class="mb-0 pointer px-1">-</p>
                <p id=${id} class="mb-0">${
        search.item === undefined ? 0 : search.item
      }</p>
                <p onclick="incrementItem(${id})" class="mb-0 pointer px-1">+</p>
            </div>
        </div>
    </div>`;
    })
  );
};
generateItems();

let incrementItem = (id) => {
  let selectedItem = id;
  let search = basket.find((item) => item.id === selectedItem.id);
  if (search === undefined) {
    basket.push({ id: selectedItem.id, item: 1 });
  } else {
    search.item += 1;
  }
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrementItem = (id) => {
  let selectedItem = id;
  let search = basket.find((item) => item.id === selectedItem.id);
  if (search === undefined) return;
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((item) => item.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((item) => item.id === id);
  if (search === undefined) return;
  $(`#${id}`).text(search.item);
  calculateItems();
};

let calculateItems = () => {
  let count = basket
    .map((item) => item.item)
    .reduce((item, sum) => (sum += item), 0);
  cartCount.text(count);
};
calculateItems();
