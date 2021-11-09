let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let prices = [];
function recipe() {
  console.log("QTY" + "       " + "ITEM" + "              " + "PRICE");
  order.forEach(({ quantity, itemName, unitPrice }) => {
    unitPrice=unitPrice.toFixed(2);
    prices.push(quantity * unitPrice);
    let str = itemName ;
    let i = 20-str.length;

    str = " ".repeat(i);

    console.log(`${quantity}      ${itemName} ${str}${unitPrice}`);
  });
  prices = prices.reduce((acc, element) => acc + element);
  return prices;
}
recipe();
console.log("   ");
console.log(`Total:  ${prices}`);
