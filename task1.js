const cart = [
  {
    name: "Shirt",
    price: 1200,
    quantity: 1,
  },
  {
    name: "Pant",
    price: 1200,
    quantity: 1,
  },
  {
    name: "Socks",
    price: 150,
    quantity: 3,
  },
];

// koto gula item kinchen and koto taka bill hoioce.

let totalItems = 0;
let totalBills = 0;

for(let item in cart){
  totalBills += cart[item].price;
  totalItems += cart[item].quantity;
}

console.log(totalBills);
console.log(totalItems);