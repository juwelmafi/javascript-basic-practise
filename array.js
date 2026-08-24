const names = ["Shafayet", "Rakib", "Mir", "Mezbah"];
const numbers = [100, 500, 600, 300];
console.log(names[0], numbers[3]);

names.push("Juwel");
names.push("Mafi");
names.pop();

names.unshift("Kajol");
names.shift();

names.splice(2, 1, "Kuddus");


console.log(names);