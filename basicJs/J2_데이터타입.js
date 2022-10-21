
let printVlue="";
printVlue='------------------------------------숫자형-------------------------------------------';
console.log(printVlue);
let number=1234;
let point=12.34;

let vlaue=Infinity; // 무한대 값
console.log('Infinity=',Infinity);
console.log('1/0=',1/0); // Infinity 무한대 출력
console.log('"숫자"/2=',"숫자"/2); // 문자랑 숫자랑 계산했기 때문에 Nan 반환

const bigInt = 1234567890123456789012345678901234567890n;
console.log('bigInt=',bigInt); // BigInt 타입

printVlue='------------------------------------문자형-------------------------------------------'
console.log(printVlue);
let sentence="my name is Jaewon Lee"
let str="Hellow world";
let strA='Hellow world';
let strB=`Hellow world ${3333}`;
let strC=`Hellow world ${sentence}`;

console.log(str);
console.log(strA); 
console.log(strB); 
console.log(strC); 


printVlue='------------------------------------불린형-------------------------------------------'
console.log(printVlue);
let ageCheck=false;
let sizeCheck=true;

console.log(ageCheck);
console.log(sizeCheck); 

let check=15 > 1;
console.log(check);

printVlue='------------------------------------NULL-------------------------------------------'
console.log(printVlue);
//null 직접 null 값을 넣어줘야만 null 이됨.
let nullValue=null;
console.log(nullValue);

printVlue='------------------------------------undefined-------------------------------------------'
console.log(printVlue);
// 변수 선언 후 값을 할당 하지 않으면 undefined 형이 선언 된다.
let undefinedValue;
console.log(undefinedValue);
let age=10;
console.log(age);
age=undefined;
console.log(age);

printVlue='------------------------------------객체(Object)-------------------------------------------'
console.log(printVlue);
printVlue='------------------------------------NULL(symbol)-------------------------------------------'
console.log(printVlue);


printVlue='------------------------------------typeof 연산자-------------------------------------------'
console.log(printVlue);

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof 1.2);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof(Math));
console.log(typeof(alert));
console.log(typeof(null));  // null은 객체가 아니다 언어상  오류임.



