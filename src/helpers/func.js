export function getCountSpecsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.specs.length : 0;
}

export const calcSubPrice = (product) => +product.count * product.item.price;

export const calcTotalPrice = (specs) => {
  return specs.reduce((ac, cur) => {
    return (ac += cur.subPrice);
  }, 0);
};
