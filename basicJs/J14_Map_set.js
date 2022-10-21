
let map = new Map();

// 데이터 설정
map.set('1', '1');
map.set(2, '2');
map.set(true, 'bool');
console.log(map)


// 데이터 가져오기 
map.get(2);

// map 사이즈 
map.size;

// 해당 키가 존재 하는지 확인.
map.has(1);

// 해당 키로 등록된 데이터 삭제 
map.delete(1);

// map 초기화 
map.clear();


// 객체를 맵으로 변경하기 
let obj = {
    name: "John",
    age: 30
};


let mapObject = new Map(Object.entries(obj));
console.log(mapObject.get('name'));

// 맵을 객체로 변경하기 
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let objA = Object.fromEntries(map.entries()); // 맵을 일반 객체로 변환 (*)

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  

  // Map 반복문 

  // 키(vegetable)를 대상으로 순회합니다.
  for (let vegetable of recipeMap.keys()) {
        console.log(vegetable); // cucumber, tomatoes, onion    
  }
  
  // 값(amount)을 대상으로 순회합니다.
  for (let amount of recipeMap.values()) {
    console.log(amount);  // 500, 350, 50
  }
  
  // [키, 값] 쌍을 대상으로 순회합니다.
  for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
    console.log(entry); // cucumber,500 ...    
  }

  recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 ...
  });



  let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 셋에는 유일무이한 값만 저장됩니다.
console.log(set.size ); // 3

for (let user of set) {
    console.log(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}

set.forEach((value, valueAgain, set) => {
    console.log(value);
});