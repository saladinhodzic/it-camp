export let cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];

export function addToCart(productId, selectQuantity) {
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
}

export function removeFromCart(productId) {
  const noviNiz = [];
  cart.forEach((value) => {
    if (value.productId !== productId) {
      noviNiz.push(value);
    }
  });
  cart = noviNiz;
}
