export const getCartItemsCount = items =>
  items.reduce(
    (total, item) => total + item.quantity,
    0
  );

export const getCartSubtotal = items =>
  items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
