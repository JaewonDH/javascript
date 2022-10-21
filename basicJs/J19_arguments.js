
// ...은 여러 파라미터를 넣으면 배열로 변환함.

function argumentTest(type,str,...value) {   
  console.log(type);
  console.log(str);
  console.log(value);

}

// 1,2,3,'ddddddd' 파라미터로 전달한 값은 함수안에서 배열로 변환 됨.
argumentTest(true,'ssssssss',1,2,3,'ddddddd');


/// ...aray를 하면 배열을 다시 개별 파라미터로 변경해줌
//  여러개 파라미터를 넣어도 됨.
let array=[1,2,4,5,100];
let value=Math.max(...array);
value=Math.max(500,...array,...array);
console.log(value);