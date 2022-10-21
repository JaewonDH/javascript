
//클로저 예제 
function counter(){
    let count=0;
    return function (){ // 반환할 내부 함수가 자신이 선언됬을때의 환경을 기억하는 함수
        return count++;
    }
}

// 반환된 내부 함수가 Counter가 사라져도 count를 기억하여 a() 호출할때마다 증가함.
let a=counter();
console.log(a());
console.log(a());
console.log(a());



// 전역 변수 사용 억제 효과 
let toggle = (function () {
  let isShow = false;
  // ① 클로저를 반환
  return function () {
    box.style.display = isShow ? 'block' : 'none';
    // ③ 상태 변경
    isShow = !isShow;
  };
})();


function Counter() {
  let count=0; //private과 같은 효과를 가짐 외부에서 접근 불가
  this.increase = function() {
    return count++;
  }

  this.decrease = function() {
    return count--;
  }

  this.print= function () {
    console.log(count);
  }

}


let testCounter= new Counter(); 
testCounter.increase(); // 클로저
testCounter.increase(); // 클로저
testCounter.increase(); // 클로저 

console.log("testCounter.increase()="+testCounter.increase());
testCounter.print();




function sum(a) {
    return function(b){
        return a+b;
    }
}
console.log(sum(1)(2));



let arr = [1, 2, 3, 4, 5, 6, 7];
arr.filter(inBetween(3,4));
function inBetween(a,b) {
  return function (x) {
      return x >= a && x <= b;
  }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort((a, b) => a.name > b.name ? 1 : -1);


function byFiled(fieldName) {
    return function (a,b) {
      return a[fieldName] > b[fieldName] ? 1 : -1;
    }
}
users.sort(byFiled('name'))


// let x = 1;
// function func() {  
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization  
//   let x = 2;
// }

// func();


// 문자열로 함수 선언이 가능 
let sumA= new Function('a', 'b', 'return a + b');
console.log(sumA(1,2));



