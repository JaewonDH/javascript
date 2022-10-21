let value=1e9; //=> 1과 9개의 0을 표시 10억
console.log(`1e9=${1e9}`);
console.log(`7.3e9=${7.3e9}`); //73억 표시
console.log(`1e-6=${1e-6}`); // 0.000001 1 앞에 0을 6개 표시
console.log(`0xFF=${0xFF}`); // 255  16진수 표현
console.log(`0b11111111=${0b11111111}`); // 255  2진수 표현
console.log(`0o377=${0o377}`); // 255  8진수 표현

// 숫자 문자열로 변경  toString() 16 , 2, 36 파라미터 값을 전달 가능 
value=255;
console.log(255);
console.log(`value.toString(36)=${value.toString(36)}`); 
console.log(`value.toString(2)=${value.toString(2)}`); // 255 2진수로 변경
console.log(`value.toString(2)=${value.toString(16)}`); // 16진수 문자열로 변경
console.log(`value.toString()=${value.toString()}`);  //255 문자열로 변경
console.log(`255..toString()=${255..toString()}`);  // 255 문자열로 변경 

//소수 자리 수 API
console.log(`Math.floor(3.1)=${Math.floor(3.1)}`); //소수점 첫째 자리에서 내림(버림). 
console.log(`Math.ceil(3.1)=${Math.ceil(3.1)}`); //소수점 첫째 자리에서 올림. 
console.log(`Math.round(3.1)=${Math.round(3.5)}`); //소수점 첫째 자리에서 반올림. 

console.log(`12.3645.toFixed(3.5)=${12.3645.toFixed(1)}`); //소수점 n 번째 수까지의 어림수를 구한 후 이를 문자형으로 반환해주는 메서드인 toFixed(n)를 사용합니다.

/// NaN 인지 확인 API
console.log(`isNaN(NaN)=${isNaN(NaN)}`); //인수를 숫자로 변환한 다음 NaN인지 테스트함
console.log(`isNaN('str')=${isNaN('s')}`); //인수를 숫자로 변환한 다음 NaN인지 테스트함
console.log(`isNaN(123)=${isNaN(123)}`); //인수를 숫자로 변환한 다음 NaN인지 테스트함
console.log(`isNaN('123')=${isNaN('123')}`); //인수를 숫자로 변환한 다음 NaN인지 테스트함

// 문자열이 일반 숫자인지 검증하는 데 사용
console.log(`isFinite('NaN')=${isFinite('NaN')}`);//isFinite(value) – 인수를 숫자로 변환하고 변환한 숫자가 NaN/Infinity/-Infinity가 아닌 일반 숫자인 경우 true를 반환함
console.log(`isFinite('Infinity')=${isFinite('Infinity')}`);//isFinite(value) – 인수를 숫자로 변환하고 변환한 숫자가 NaN/Infinity/-Infinity가 아닌 일반 숫자인 경우 true를 반환함
console.log(`isFinite('15')=${isFinite('15')}`);//isFinite(value) – 인수를 숫자로 변환하고 변환한 숫자가 NaN/Infinity/-Infinity가 아닌 일반 숫자인 경우 true를 반환함
console.log(`isFinite('STR')=${isFinite('STR')}`);//isFinite(value) – 인수를 숫자로 변환하고 변환한 숫자가 NaN/Infinity/-Infinity가 아닌 일반 숫자인 경우 true를 반환함

// 문자열에서 숫자 혹은 소수 반환 API
console.log(`parseInt('100px')=${parseInt('100px')}`);
console.log(`parseInt('0xff',16)=${parseInt('0xff',16)}`);

console.log(`parseInt('ff',16)=${parseInt('ff',16)}`);
console.log(`parseInt('100px')=${parseInt('100px')}`);
console.log(`parseInt('100px')=${parseInt('100px')}`);
console.log(`parseInt('a123')=${parseInt('a123')}`); // 첫번째 문자열이 a라 Nan반환
console.log(`parseFloat('12.5em')=${parseFloat('12.5em')}`);

// Math 함수
console.log(`Math.random()=${Math.random()}`); // 랜덤 값을 반환 0~1사이의 난수 반환
console.log(`Math.random()=${Math.random(1,5)}`); // 랜덤 값을 반환 0~1사이의 난수 반환
console.log(`Math.pow(2,10)=${Math.pow(2,10)}`); //2 의 10 제곱 1024
console.log(`Math.max(3, 5, -10, 0, 1)=${Math.max(3, 5, -10, 0, 1)}`); // 입력 파라미터의 최대 값을 반환
console.log(`Math.min(3, 5, -10, 0, 1)=${Math.min(3, 5, -10, 0, 1)}`); // 입력 파라미터의 최소 값을 반환