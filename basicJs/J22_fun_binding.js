let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`)    
  }
};

// 함수를 넘길때 함수안에 this를 사용하면 이 this 는 undefined이기 때문에 bind를 사용해야함.
setTimeout(user.sayHi, 1000); // Hello, undefined!


// 사용할 함수에 객체를 bind 시켜 this user임을 명시한다.
let bindfun=user.sayHi.bind(user);
setTimeout(bindfun, 1000); // Hello, John!


var view = {
  'label': 'docs',
  'click': function() {
    console.log('clicked ' + this.label);
  }
};
 
// 라이브러리 사용하여 사용 가능 
//_.bindAll(view, ['click']);

////////////문제1 

function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let userA = {
  name: 'John',

  loginOk() {
    aleconsole.log(`${this.name}님이 로그인하였습니다.`);
  },

  loginFail() {
    console.log(`${this.name}님이 로그인에 실패하였습니다.`);
  },
};

let loginOk=userA.loginOk.bind(userA);
let loginFail=userA.loginFail.bind(userA);

askPassword(loginOk, loginFail);


////////////문제2
function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let userB = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' 로그인 성공' : ' 로그인 실패') );
  }
};

askPassword(()=>{
  userB.login(true);
}, ()=>{
  userB.login(false);
});

// bind를 통해 함수 파라미터인자 값을 고정 시킬 수 도 있다
let funBindA=userB.login.bind(userB,true)
userB.name="jaewon";
let funBindB=userB.login.bind(userB,false)
askPassword(funBindA,funBindB);

