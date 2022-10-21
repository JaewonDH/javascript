
console.log("-------------String-------------");
let value=true;
value=String(value);
console.log(value)
console.log(typeof value)


console.log("-------------Number-------------");

value='1234'
value=Number(value);
console.log(value);
console.log(typeof value);

console.log(`"6"/"2"=${"6"/"2"}`);
console.log(`Number('123')=${Number('123')}`);
console.log(`Number('  123')=${Number(' 123')}`);
console.log(`Number(' a 123')=${Number(' a 123')}`);
console.log(`Number(true)=${Number(true)}`);
console.log(`Number(false)=${Number(false)}`);
console.log(`Number(null)=${Number(null)}`);
console.log(`Number(undefined)=${Number(undefined)}`);


console.log("-------------Boolean-------------");

console.log(`Boolean(undefined)=${Boolean(undefined)}`);
console.log(`Boolean(1)=${Boolean(1)}`);
console.log(`Boolean(0)=${Boolean(0)}`);
console.log(`Boolean("s")=${Boolean("s")}`);
console.log(`Boolean(" ")=${Boolean(" ")}`);
console.log(`Boolean("")=${Boolean("")}`);
console.log(`Boolean("true")=${Boolean("true")}`);
console.log(`Boolean("false")=${Boolean("false")}`);

console.log(`Boolean("true")=${Number("true")}`);
console.log(`Boolean("false")=${Number("false")}`);

console.log(`Boolean(1)=${Boolean(1)}`);
console.log(`Boolean(0)=${Boolean(0)}`);


/* 확인 해야 할 사항
undefined 숫자로 형변환 시 Nan 됨
null 숫자로 형변환 시 0 이됨.
*/
 