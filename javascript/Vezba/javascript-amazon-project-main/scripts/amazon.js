let string = "";

products.forEach((value) => {
  string += `
  <div class="product-container">
  <div class="product-image-container">
    <img
      class="product-image"
      src="${value.image}"
    />
  </div>

  <div class="product-name limit-text-to-2-lines">
    ${value.name}
  </div>

  <div class="product-rating-container">
    <img
      class="product-rating-stars"
      src="images/ratings/rating-${value.rating.stars * 10}.png"
    />
    <div class="product-rating-count link-primary">${value.rating.count}</div>
  </div>

  <div class="product-price">$${(value.priceCents / 100).toFixed(2)}</div>

  <div class="product-quantity-container">
    <select class="select-quantity-${value.id}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart add-message-${value.id}">
    <img src="images/icons/checkmark.png" />
    Added
  </div>

  <button class="add-to-cart-button button-primary js-add-button" 
  data-product-id="${value.id}">Add to Cart</button>
</div>
  `;
});

document.querySelector(".products-grid").innerHTML = string;
const timeouts = {};

document.querySelectorAll(".js-add-button").forEach((button) => {
  button.addEventListener("click", () => {
    const { productId } = button.dataset;
    const selectQuantity = document.querySelector(
      `.select-quantity-${productId}`
    );

    const addMessage = document.querySelector(`.add-message-${productId}`);
    addMessage.classList.add("js-add-message");

    setTimeout(() => {
      const previousTimeout = timeouts[productId];
      if (previousTimeout) {
        clearTimeout(previousTimeout);
      }
      const timeoutId = setTimeout(() => {
        addMessage.classList.remove("js-add-message");
      }, 2000);

      timeouts[productId] = timeoutId;
    });
    let matchingItem;

    cart.forEach((item) => {
      if (item.productId === productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += +selectQuantity.value;
    } else {
      cart.push({
        productId: productId,
        quantity: Number(selectQuantity.value),
      });
    }
    let cartQuantity = 0;
    cart.forEach((value) => {
      cartQuantity += value.quantity;
    });
    document.querySelector(".cart-quantity").innerHTML = cartQuantity;

    console.log(cartQuantity);
  });
});
