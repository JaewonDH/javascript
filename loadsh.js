import _ from "lodash";
const fruits = [
  { fruitId: 1, name: "banana" },
  { fruitId: 2, name: "apple" },
  { fruitId: 3, name: "strawberry" },
  { fruitId: 4, name: "melon" },
  { fruitId: 5, name: "kiwi" },
];

const checkedFruit = _.find(fruits, { name: "kiwi" });
console.log("checkedFruit", checkedFruit);
