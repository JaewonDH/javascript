
console.log(`0=="0":${0=="0"}`);
// "0"을 숫자형으로 형변환 되어 0으로 변환되어 true가됨

//원래 데이터의 자료형까지 비교하려면 ===를 사용해야 함.
console.log(`0==="0":${0==="0"}`);
console.log(`0!=="0":${0!=="0"}`);

console.log(`null!==undefined:${null!==undefined}`);

// null, undefined은 == 비교 연산자 사용 시 숫자형으로 변환 되지 않음


// 
let result = "" || "1" || "s"; 
// 처음 조건이 "" false로 다음 조건 "1" 검사후 true 이므로 "1" 값을 반환
console.log(`"" || "1" || "s"=${"" || "1" || "s"}`);
result = undefined || null || 0; 
console.log(`undefined || null || 0=${undefined || null || 0}`);
// 비교 값이들이 다 false 이면 0을 반환
console.log(result);


// 문자열 변수들 중에 값이 있는 변수
let firstName = "";
let lastName = "";
let nickName = "바이올렛";

console.log(`firstName || nickName || lastName=${firstName || nickName || lastName}`);

// 단락평가  lastName 갑이 없으면 두번째 함수 실행 후 반환 
(lastName || console.log("dd"));


console.log(0 && 1);



let age=13;
if(age >= 14 && age < 90){
    console.log("14세 이상이면서 90세 이하");
}else{
    console.log("나이에 속하지 않음");
}


age=14;
if(age <= 13 || age > 90){
    console.log("13세 이하부터 90세 이상인 겨우 ");    
}else{
    console.log("나이에 속하지 않음");
}

if(!age >= 14 || !(age < 90)){
    console.log("13세 이하부터 90세 이상인 겨우 ");    
}else{
    console.log("나이에 속하지 않음");
}

console.log(!age >= 14);
console.log(!(age < 90));


/*
   "" || "1" || "s" 
   => 처음 부터 오른쪽으로 이동하면서 true 인값을 찾아 true이면 해당 값을 반환
   "" && "1" && "s" 
   => 처음 부터 오른쪽으로 이동하면서 false를 만나면 해당 값을 반환 하고 false가 없으면 마지막의 변수 값을 반환   

   a ?? 1
   => ??는 앞에 변수 a에 null이나 undefined 확인하여 아니면 a 값을 반환 그렇지 않음면 1을 반환
   => a ?? 1 =====> (!a==null && !a==undefined) ? a : 1

*/



