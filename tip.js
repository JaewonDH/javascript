/**
  
  a태그 클릭시 페이지가 이동되는데 이동을 막으려면 선언.
  <a href="javascript:void(0);"></a>   

*/

function print(){
  console.log(this);
}

let objectB={
  a:30,
  funA:print
}

objectB.funA()
objectB.fun=()=>{
  console.log(this);
}



let a=100;

let objectTest={
  a:10,
  b:this,
  arrayNumber: [3,2,1],
  testA: function(){    
    this.arrayNumber.forEach(element => {
       console.log(this);
    });
  },  
  testB:()=>{
    console.log(this);  // => 함수는 this가 없기 때문에 상위 context인 window가 this가 된다.
  }, 
}
objectTest.testA();
objectTest.testB();


