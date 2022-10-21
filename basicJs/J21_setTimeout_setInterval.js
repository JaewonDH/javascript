
//setTimeout 시간 설정 후 설정한 시간이 지나면 설정한 함수 실행

//타이머는 아래 for문이 다 돌아아 적용 됨.
let timerid=setTimeout(()=>{
    console.log('2초지남');
},100);

console.log('for start');
let i=0;
for(let j = 0; j < 100000000; j++) {
  i++;
}
console.log('for end');
//설정한 타이머를 취소 
//clearTimeout(timerid);



//setInterval 설정한 시간 마다 함수가 호출 됨.
let intervalID=setInterval(()=>{
  console.log('1초마다 발생');
},1000);

setTimeout(()=>{
  clearTimeout(intervalID);
},5000);


