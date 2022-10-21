
/*
Map ,Set, Array 
keys(), values(), entries() 사용할 수 있다.

일반 객체엔 다음과 같은 메서드를 사용할 수 있습니다.
Object.keys(obj) – 객체의 키만 담은 배열을 반환합니다.
Object.values(obj) – 객체의 값만 담은 배열을 반환합니다.
Object.entries(obj) – [키, 값] 쌍을 담은 배열을 반환합니다.
*/

let user = {
    name: "John",
    age: 30
  };

Object.keys(user); //= ["name", "age"]
Object.values(user); //= ["John", 30]
Object.entries(user);// = [ ["name","John"], ["age",30] ]

/*
객체에 map 과 fileter 사용하기 
*/

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  

  //Object.fromEntrie 배열을 object로 변환
  let doublePrices = Object.fromEntries(
    // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );


  // object를 배열로 변경하여 계산하는 예제

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function sumSalaries(object) {
      let sum=0;
      for(value of Object.values(object)){
            sum+=value;
      }
      return sum;
  }

console.log(sumSalaries(salaries));


let userA = {
    name: 'John',
    age: 30
};

function count(object) {
    return Object.keys(object).length;
}

console.log(count(userA) );


