// 기본 문법
class Myclass{
  constructor(value){
    this.name="Jaewon";
    this.clickValue=value;
  }

  // 변수 컨트롤 name 을 사용할때 호출됨
  get name(){
      //여기다가 특정 코드를 넣을 수 있음
      console.log('name get이 호출됨.')
    return this._name;
  }

  // 변수 컨트롤 name에 값을 넣으면 호출 됨.
  set name(value){
    //여기다가 특정 코드를 넣을 수 있음
      if(value.length==0){
        console.log('값이 없어요');
      }
    this._name=value;
  }

  sayHi(){
    console.log(this.name);
  }

  clickA(){
    console.log(this.clickValue);    
  }

  clickB=()=>{
    console.log(this.clickValue);    
  }
}

function My() {
  this.name="jaewon";
  this.sayHi=function () {
    console.log(this.name);
  }
}

let a = new Myclass('함수테스트');
a.sayHi();
console.log(a.name);
a.name="";

function test1(params) {
//a.clickA 는 this 가 없기 때문에 undefined나옴 bind를 하여 객체를 지정하면 사용가능
let newClickA=a.clickA.bind(a);
setTimeout(newClickA,1000);
setTimeout(a.clickA,1000);
// 화살표 함수로 하면 bind 하지 않아도 됨 this는 외부 에서 찾음
setTimeout(a.clickB,2000);

let b = new My();
b.sayHi();
 
}
//test1();



/////////////////////////// 상속 /////////////////////////////////////////////////////////////////////////////////
class Animal{
  constructor(name){
    this.name=name;
    this.speed=0;
  }

  run(speed){
    this.speed=speed;
  }

  stop(){
    this.speed=0;
  }

  currentPrint(){
    console.log(`${this.name}의 속도는 ${this.speed} 입니다.`);    
  }
}

class Rabbit extends Animal{  
  // 자식에서 생성자를 만들경우 super로 기존 부모 파라미터 값을 넘겨줘야 함.
  constructor(name, age){ 
    super(name);
    this.age=age;
  }
  stop(){
    //부모 오버라이드 
    super.stop();
    this.currentPrint();
  }
}

let animal = new Animal("호랑이");
animal.run(20);
animal.currentPrint();

let rabbit = new Rabbit('토끼');
rabbit.run(30);
rabbit.currentPrint();
rabbit.stop();

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock{
  constructor(template,precision){
    super(template)    
    this.precision=precision;
  }

  start(){
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock=new Clock({template:'h:m:s'})
//clock.start();

let extendedClock=new ExtendedClock({template:'h:m:s'},2000);
//extendedClock.start();




//////////////////////////protected , private /////////////////////////////////////////////////////
// 실제로 Protected는 없다 하지만 _ 붙여서 protected처럼 하는 것으로 추정 됨.
class Car {  
  #engine=""; // private 선언
  constructor(name,color,engine){
    this._name=name;   // public 상태 car.name="" 외부에서 변경이 가능 
    this.color=color; // protected 상태             
    this.#setEngine(engine);
  }

  setName(name){
    this._name=name;
  }

  getName(){
    return this._name;
  }

  #setEngine(value){ // private 함수  내부에서만 호출 가능 
    this.#engine=value;
  }
  
  printCar(){    
    console.log(`자동차 이름은 ${this._name} 색상은 ${this.color} 엔진은 ${this.#engine}`);
  }
  
}

let car = new Car("k7","red", "2000cc");
car.name="k5"; // 실제로 car_name으로 접근하면 접근이 가능하다.
car.printCar();
car.setName("k3");  // car.name은 무시됨. 호출해야 적용됨

car.engine="50000cc";// private은 외부에서 접근 불가능
//car.#setEngine("ddd");// 외부에서 호출 불가능 
car.printCar();


console.log("instanceof="+car instanceof Car); 
console.log("instanceof="+clock instanceof Clock);

