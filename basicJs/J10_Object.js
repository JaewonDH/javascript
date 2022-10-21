const user={};
user.name='Jonh'
user.surname='Smith';
user['name']='Pete';
delete user.name;


function isEmpty(objectValue){
    for(propertyName in objectValue ){
        return false;
    }
    return true;
}

let schedule = {};
console.log(`isEmpty(schedule)=${isEmpty(schedule)}`)
schedule["8:30"] = "get up";
console.log(`isEmpty(schedule)=${isEmpty(schedule)}`)

let salaries = {
    a:100,
    b:160,
    c:130
}

 
function sumProperty(object){
    let sum=0;
    for(let key in object){        
        sum+=object[key];
    }
    return sum;
}

console.log(`sumProperty(schedule)=${sumProperty(salaries)}`)

let menu={
    width: 200,
    height:300,
    title:'name'
}

function multiplayNumeric(menu){
    for(let key in menu){      
        console.log(typeof menu[key]);         
        if((typeof menu[key])=='number'){            
            menu[key]=menu[key]*2;            
        }
    }
}

//multiplayNumeric(menu);
//console.log(menu);

const car= {
    name:"k7"
};

let tempCar={
    color:'red'
};

Object.assign(tempCar,car);
console.log(tempCar)

function marry(man, woman){
    man.wfie=woman;
    woman.husband=man;

    return {
        father: man,
        mother : woman
    }
}

let familly = marry({name:'jaewon'}, {name:'dahae'});

console.log(familly);


let people={
    name:'jaewon',
    age : 333,
    address:'',

    getName: function(){
        return this.name; // this는 object를 가리킴  user
    },

    getAge(){
        return this.age;
    },

    getAddress:()=>{
        return this.address;
    }
}

console.log(people.getAge());
console.log(people.getName());


let calculator = {
    inputA:0,
    inputB:0,
    read(){
        this.inputA=+prompt("계 산할 첫번 째 입력 값",'');
        this.inputB=+prompt("계산 할 두번 째 입력 값",'');
    },
    sum(){
        return this.inputA + this.inputB;
    },
    mul(){
        return this.inputA * this.inputB;
    }
}

//calculator.read();
console.log(calculator.mul());
console.log(calculator.sum());


function Calculator(){
    this.read= function(inputA, inputB){
        this.inputA=inputA;
        this.inputB=inputB;
    }

    this.sum= function (){
        return this.inputA+this.inputB;
    }

    this.mul= function (){
        return this.inputA*this.inputB;
    }
}


let key= Symbol('key');
let key1= Symbol('key1');

console.log(key1.description);


/*
객체 정리 

const car={
    color:'',
    cost: 0,    
}
    
1. 대괄호 표기법 사용 가능 
=> car["name"]="k7";

2. delete로 객체의 property 삭제 
=> delete car.color;
=> delete car[coast];

3. in 으로 객체에 property 존재 확인.    
=> ('color' in car) => 존재하면 true 리턴 됨

4. for(item in car) 으로 item 전체 순회 가능 

5. object 객체 복사 
=>참조에 의한 복사 
  const car= {};
  const tempCar=car;  // 참조에 의한 복사 

=> Object.assign() 깊은 복사  
객체 안의 객체는 복사가 안되며 for문으로 직접 복사해야 함.
자바스크립트 라이브러리 lodash의 메서드인 _.cloneDeep(obj)을 사용하면 가능
    const car= {
        name:"k7"
    };

    let tempCar={
        color:'red'
    };

    Object.assign(tempCar,car);
6. 가비지 컬렉터
=> 사용하지 않는 object에 null 을 넣거나 참도되는 object에 null 넣어 메모리 관리를 해야 한다. 

7. Object에 함수 정의 가능 
=> 함수는 아래 처럼 3가지 타입으로 정의 가능 
    let people={
        name:'jaewon',
        age : 333,
        address:'',

        getName: function(){
            return this.name; // this는 object를 가리킴  user
        },

        getAge(){
            return this.age;
        },

        getAddress:()=>{
            return this.address;
        }
    }

8. this 
=> 함수에 안에서 사용 가능하며 함수에서 사용 시 객체에 포함되지 않은 
상태에서는 undefined 되며 포함될 때 this는 포함된 object가 된다.
let calculator = {
    inputA:0,
    inputB:0,
    read(){
        this.inputA=+prompt("계 산할 첫번 째 입력 값",'');
        this.inputB=+prompt("계산 할 두번 째 입력 값",'');
    },
    sum(){
        return this.inputA + this.inputB;
    },
    mul(){
        return this.inputA * this.inputB;
    }
}

9. new 연산자와 생성자 함수
객체의 틀을 만들고 재 사용하기 사용함.

function Accumulator(value){
    this.value=value;

    this.read=(value)=>{
        this.value+=value;
    }
}

let accumulator = new Accumulator(2);

accumulator.read(2);
accumulator.read(10);

console.log(accumulator.value);


// 재사용할 필요가 없는 객체를 아래와 같이 만들어 캡슐화 한다.
let userB= new function(){

}


10. 옵셔널 체이닝 공부해야함 ? 최근 문법
11. Symbol
11. 체를 원시형으로 변환하기 ?
*/






