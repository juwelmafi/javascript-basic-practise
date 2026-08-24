const obj = {
  name: "juwel",
  age: 22,
  address: "dhaka"
};

delete obj.address;
obj.address = "madaripur";
obj.address = "kire vai";

console.log(obj.name);
console.log(obj["age"]);
console.log(obj);
console.log(Object.entries(obj));
console.log(Object.keys(obj));