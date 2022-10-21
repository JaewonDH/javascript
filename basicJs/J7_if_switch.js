// if
let message;
let login=''
if (login == '직원') {
    message = '안녕하세요.';
  } else if (login == '임원') {
    message = '환영합니다.';
  } else if (login == '') {
    message = '로그인이 필요합니다.';
  } else {
    message = '';
  }

  console.log(message);
  
 //조건부 연산자 
  login='직원';
(login == '직원') ? message = '안녕하세요.' :
(login == '임원') ? message = '환영합니다.' :
(login == '')     ? message = '로그인이 필요합니다.':message = ''

console.log(message);



// switch
// 특이사항 case 값에 연산자가 올수 있음
// case 값에 다른 데이터 타입들이 존재 해도 됨.

let a = '1';
let b = 0;
switch (+a) {
    case b + 1:
        console.log("value is 1")
    case b + 2:
        console.log("value is 2")
    default :
        console.log("default")
}

a='4'
switch (a) {
    case 0:
        console.log("default");
        break
    case 1:
        console.log("default");
        break
    case 2:        
    case 3:
        console.log("2");        
        console.log("3");
        break
    case '4':        
        console.log("4");
        break
}