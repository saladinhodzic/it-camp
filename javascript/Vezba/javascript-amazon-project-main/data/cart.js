export const cart = [];

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
