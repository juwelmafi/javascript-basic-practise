let user = {
  name : "Juwel",
  age : 22,
  address: {
    city: "Madaripur",
    area: "Shibchar",
    zipcode: 1212
  }

}

const students = [
  {
    name: "Rahim",
    id: 100,
    age: 26
  },
  {
    name: "Fahim",
    id: 101,
    age: 24
  },
  {
    name: "Sahim",
    id: 102,
    age: 22,
    address: {
      district: "Madaripur",
      thana: "Shibchar",
      bus: ["Sharbick", "Anondo"]
    }
  },
]

// let entries = Object.entries(user);
// console.log(entries[0][1]);

// console.log(user.address.city);

console.log(students[2].address.bus[1]);