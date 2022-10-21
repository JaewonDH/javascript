/*
chapter 1 
함수를 리턴 시켜 사용 
*/

//bind를 써야 test 함수를 외부에서 쓸수 있음.
const getRegExp = (regExp) => {
  return regExp.test.bind(regExp);
};

const emailCheck = getRegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const isValidateString = (check, value) => {
  return check(value);
};
console.log(isValidateString(emailCheck, "ss@na"));

/*
chapter 2
클로저 함수를 린터 시켜사용 
*/
const rootParent = (a, b) => {
  return (c, d) => {
    return (e, f) => {
      return a + b + c + d + e + f;
    };
  };
};

const parent = rootParent(1, 2);
const child = parent(3, 4);
const resultTotal = child(5, 6);
console.log("resultTotal", resultTotal);

// 커링
const add10 = (value) => value + 10;
const multi5 = (value) => value * 5;
const result = multi5(add10(10));
const add10AndMulti5 = (value) => multi5(add10(value));
console.log("add10AndMulti5", add10AndMulti5(20));

/////////////////////////////////////////////////////////////////
const add = (x) => {
  return (y) => {
    return x + y;
  };
};
const multi = (x) => (y) => x * y;
console.log(multi(5)(add(5)(1)));

/////////////////////////////////////////////////////////////////
const setBraket = (a) => {
  return (b) => {
    return (c) => {
      return `${a}${c}${b}`;
    };
  };
};
const resultStr = setBraket("{")("}")("aaa");
console.log(resultStr);

/////////////////////////////////////////////////////////////////

const isEmpty = (value) => {};
