

let date= new Date();
console.log(`date=${date}`);


let startDate = new Date();
for(let i=0; i<100000000; i++){
  let display=`시간 차이는 다음과 같습니다:${new Date()-startDate}`    
  console.log(display);
}
let endDate = new Date();

let display=`끝 시간 차이는 다음과 같습니다:${endDate-startDate}`
console.log(display);

