



// 배열 분해하기 
let arr = ["Bora", "Lee"]
let [nameA, nameB] = arr;

console.log(nameA);
console.log(nameB);

let [nameC, nameD] = "Bora Lee".split(' ');
console.log(nameC);
console.log(nameD);


// 필요하지 않는 데이터를 , 로 공백을 주면 제거하고 분해 가능 
let [firstName, , title, nameF] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(firstName);
console.log(title);
console.log(nameF);


// ...을 사용하면 해당 위치부터 모두 배열로 분배함
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1); // Julius
console.log(name2); // Caesar

// `rest`는 배열입니다.
console.log(rest); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2