print("Ddddddddsss")

function print(data){
    console.log(data);
}

function printAge(age=100){
    console.log(age);
}

function getAge(){
    return 18;
}

function showMesage(message){
    message=message?? (message || "메세지가 없습니다.");
    console.log(message);
}

let showUserInfo =function(name,print,age=getAge(),temp=22){
    print(`age is ${age} , name is ${name}  tt:${temp}`);    
}

function checkAge(age){
    return age >18 || confirm("보호자의 동의를 받으셨나요?") 
    //return  age >18 ? true : confirm("보호자의 동의를 받으셨나요?") ;        
}

function min(a,b){
    if(a>b){
      return b;
    }else if(b>a){
      return a;        
    }else{
      return a;
    }
}

function pow(x,n){
    if(n < 1){
        alert("자연수를 입력해주세요");
        return;
    }
    console.log(x**n);    
}

printAge(2);
showUserInfo("Dddd",print,12);
showMesage(undefined);

console.log(min(2,5));
console.log(min(3,-1));
console.log(min(1,1));

pow(prompt("자연수"),prompt("제곱근2"));


let sum = (a,b)=>{
    return a+b;
}

let minus = (a,b)=> a+b;

let printA2 = ()=> console.log();

let printMessagea = message => console.log(message);

let ask= (question , yes, no) => {
    if(confirm(question)){
        yes();
    }else{
        no();
    }
}

ask("동의 하십니까?",
    () =>alert("동의하셨습니다."),
    () =>alert("취소버튼을 누르셨습니다. ")
);


/* 함수 정리 
1. 디폴트 파라미터에 값이나 함수를 호출하여 설정 가능 
=> function aa(name,print,age=getAge(),temp=22){

    }

2. 파라미터에 함수를 넣어 함수 내부에서 함수 호출 가능 
=>  function print(data){
        console.log(data);
    }
=>  function showMesage(message, print){
        print(message);
    }
    showmesage("ddd",print);

3. 함수 표현식 가능 
=> let print=function(message){
        console.log(message);
   }
4. 화살표 함수 
아래와 같이 함수를 줄여서 표현 할 수 있다.
=> let minus = (a,b)=> a+b;
   let printA2 = ()=> console.log();
   let printMessagea = message => console.log(message);  
*/


