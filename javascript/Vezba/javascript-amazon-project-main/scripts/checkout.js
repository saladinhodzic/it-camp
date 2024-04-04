import {
  cart,
  removeFromCart,
  calculateCartQuantity,
  updateQuantity,
} from "../data/cart.js";
import { products } from "../data/products.js";
import { convertToDollars } from "./utils/money.js";
const orderList = document.querySelector(".order-summary");
let orderListString = "";

cart.forEach((value) => {
  const productId = value.productId;
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  console.log(matchingProduct);

  orderListString += `      
  <div class="cart-item-container cart-id-${matchingProduct.id}">
    <div class="delivery-date">Delivery date: Tuesday, June 21</div>

    <div class="cart-item-details-grid">
      <img
        class="product-image"
        src="${matchingProduct.image}"
      />

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">$${convertToDollars(
          matchingProduct.priceCents
        )}</div>
        <div class="product-quantity">
          <span> Quantity: <span class="quantity-label quantity-label-${
            matchingProduct.id
          }">${value.quantity}</span> </span>
          <span class="update-quantity-link link-primary update-quantity"
          data-product="${matchingProduct.id}">
            Update
          </span>
          <input class="quantity-input quantity-input-${matchingProduct.id}">
          <span data-product='${
            matchingProduct.id
          }' class="save-quantity link-primary">Save</span>
          <span class="delete-quantity-link link-primary delete-button"
          data-id="${matchingProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            checked
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}"
          />
          <div>
            <div class="delivery-option-date">Tuesday, June 21</div>
            <div class="delivery-option-price">FREE Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}"
          />
          <div>
            <div class="delivery-option-date">Wednesday, June 15</div>
            <div class="delivery-option-price">$4.99 - Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}"
          />
          <div>
            <div class="delivery-option-date">Monday, June 13</div>
            <div class="delivery-option-price">$9.99 - Shipping</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
});

orderList.innerHTML = orderListString;

document.querySelectorAll(".delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.id;
    removeFromCart(productId);
    const container = document.querySelector(`.cart-id-${productId}`);
    container.remove();
    updateItems();
  });
});

function updateItems() {
  const cartQuantity = calculateCartQuantity();
  document.querySelector(".checkout-items").innerHTML = cartQuantity;
}

updateItems();

document.querySelectorAll(".update-quantity").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.product;
    const container = document.querySelector(`.cart-id-${productId}`);
    container.classList.add("is-editing");
  });
});

document.querySelectorAll(".save-quantity").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.product;
    const container = document.querySelector(`.cart-id-${productId}`);
    container.classList.remove("is-editing");
    const quantityInput = document.querySelector(
      `.quantity-input-${productId}`
    );
    const valueInput = +quantityInput.value;
    updateQuantity(productId, valueInput);

    document.querySelector(`.quantity-label-${productId}`).innerHTML =
      valueInput;
    calculateCartQuantity();
  });
});
