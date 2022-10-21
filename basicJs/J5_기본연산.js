let value=2**5;  //2를 5번 곱함. 거듭 제곱 연산자 
console.log(value);

value=5%2; // 나머지 연산자 5를 2로 나눈 나머지 
console.log(value);


//!!!! +는 문자열이 있으면 문자열로 변경 됨 -는 문자열이 있으면 숫자형으로 변경하여 계산됨. 
let str="aa" + "bb";
str= '1'+2; //숫자랑 문자랑 + 하면 문자열이 함쳐짐 12
console.log(`'1'+2=`+str);

str=6-'2';
console.log(`6-'2'=${str}`);

str='2'-6;
console.log(`'2'-6=${str}`);


value=+true; // + 가 숫자형으로 변경 
console.log(`+true=${value}`); 

value=+""; // + 가 숫자형으로 변경 
console.log(`+""=${value}`); 

value=+"12"; // + 가 숫자형으로 변경 
console.log(`+"12"=${value}`); 


// 문자열앞에 +를 넣으면 숫자형으로 형변환됨.
let firstValue="1";
let secondValue="2";

value=firstValue+secondValue;
console.log(value); 

value=+firstValue+ +secondValue;
console.log(value); 


let testValue=2;
value=testValue++;   // ++ 뒤에 있는 상태에서는 값을 반환 후 ++로 증가 한다.
console.log(value);
console.log(testValue);

testValue=2;
value=++testValue;   // ++ 앞에 있는 상태에서는 값을 반환 후 ++로 증가 한다.
console.log(value);
console.log(testValue);

/* 확인해야 할 사항
1.  +는 문자열이 있으면 문자열로 변경 됨
    '1'+2="12"  

2.  -는 문자열이 있으면 숫자형으로 변경하여 계산됨.
    6-'2' =4   '2'-6=-4

3.  value++  ++가뒤에 있는 상태에서는 값을 반환 후 ++로 증가 한다.
    let a=value++; value가 1이면 value에 먼저 a값을 넣고 ++ value 값을 증가 시킨다.
*/