let promiss = new Promise( (resolve, reject)=>{
    setTimeout(() => {
      resolve('1초지남');
      console.log(resolve.toString);
    }, 1000);
});

promiss.then( resolve =>{
  console.log('then 호출 ');
})

function f1(callback) {
  setTimeout(() => {
    console.log("f1 실행");
    callback();
  }, 2000);
}

function f2(callback) {
  setTimeout(() => {
    console.log("f2 실행");
    callback();
  }, 3000);
}

function f3(callback) {
  setTimeout(() => {
    console.log("f3 실행");    
    callback();    
  }, 4000);
}

// 아래 콜백
// f1(()=>{
//   f2(()=>{
//     f3(()=>{
//         console.log('끝')
//     })
//   })
// });



/////////////////개선//////////////////////////////
function nf1() {
  return new Promise((resolve,reject)=>{        
    setTimeout(() => {
      resolve("f1 실행");  // user의 id를 얻어서 반환
    }, 2000);    
  });
}

function nf2() {
  return new Promise((resolve,reject)=>{        
    setTimeout(() => {
      //reject("f2 에러 ");
      resolve("f2 실행"); // user
    }, 1000);    
  });
}

function nf3() {
  return new Promise((resolve,reject)=>{        
    setTimeout(() => {
      resolve("f3 실행");
    }, 2000);    
  });
}

let test1= ()=>{
  // 아래와 같이 프로미스를 연달아 사용 가능하여 콜백지옥을 만들지 않아야 한다.
  nf1()
  .then(resolve =>{
    console.log(resolve);
    return nf2(); // nf1() 함수 다음에 호출 할 함수를 호출 후 리턴하면되는데 해당 함수 리턴 값이 promiss 여야 함.
  }).then(resolve =>{
    console.log(resolve);
    return nf3();
  }).then(resolve =>{
    console.log(resolve);    
  }).catch(error=>{
    console.log(error)
    //promiss 에서 reject를 하면 catch를 받음
    // 에러 처리를 받음
  }).finally( ()=>{
      console.log("끝");
  });
};

let test2= ()=>{
    // 동시 실행 
  console.time();
  // 동시에 3함수를 실행하여 수행이 다끝나면 then을 호출 받음
  Promise.all([nf1(), nf2(), nf3()]).then(res=>{
    console.log(res);
    console.timeEnd();
  });
};

let test3= ()=>{
  // 3개 함수중 하나라도 함수 호출 이 끝나면 then 콜백이 올라옴.
  Promise.race([nf1(), nf2(), nf3()]).then(res=>{
    console.log(res);
    console.timeEnd();
  });
};

//////////////////// async away////////////////////////////////

//async는 Promise를 반환한다.
async function test4() {
  // await를 사용하면 해당 함수가 끝날때 까지 기다린다.
  // await는 async함수 안에서만 사용 가능 
  let result1 = await nf1();
  try {
    console.log("result1="+result1);
    let result2 = await nf2(result1);
    console.log("result2="+result2);
    let result3 = await nf3(result2);
    console.log("result3="+result3); 
  } catch (error) {
     // 에러처리 
  }    
}

test4();


async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  // shows 10 after 1 second  //wait 함수는 Promise를 반환 함.
  wait().then(result => alert(result));
}

f();