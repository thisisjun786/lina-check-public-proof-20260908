export function total(items) { return items.reduce((sum, { price, quantity }) => sum + price * quantity, 0); }
