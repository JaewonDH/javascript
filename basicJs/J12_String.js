let guestList = `손님:
 * John
 * Pete
 * Mary
`;

console.log(guestList);
console.log(`'\u00A9'=${ "\u00A9"}` ); // ©
console.log( "\u{20331}" ); // 佫, 중국어(긴 유니코드)
console.log( "\u{1F60D}" ); // 😍, 웃는 얼굴 기호(긴 유니코드)

//문자열 길이 
console.log(`guestList.length=${guestList.length}`);

/*************************** 한글자 접근 *********************  */
console.log(`guestList[0]=${guestList[0]}`);
console.log(`guestList[333]=${guestList[333]}`);  //undefined 반환
console.log(`guestList.charAt(333)=${guestList.charAt(333)}`); //빈문자열 반환 


/*************************** 대소문자 변경  *********************  */

console.log(`'Interface'.toUpperCase()=${'Interface'.toUpperCase()}`); //대문자
console.log(`'Interface'.toLowerCase()=${'Interface'.toLowerCase()}`);// 소문자


/*************************** 문자열 찾기*********************  */
//찾으면 index를 반환 못찾으면 -1  두번째 파라미터는 시작 위치 
let str = 'Widget with id i i';
console.log(`str.indexOf('with   ')=${str.indexOf('with  ')}`);  
console.log(`str.indexOf('with')=${str.indexOf('with')}`);
console.log(`str.indexOf('i,1')=${str.indexOf('i',1)}`);

//뒤에서부터 찾기 
console.log(`str.indexOf('Widget')=${str.lastIndexOf('i',10)}`); 

/*************************** 문자열 포함*********************  */

console.log(`str.includes('with')=${str.includes('with')}`);   // 문자열 포함화인 
console.log(`str.includes('with',4)=${str.includes('with',10)}`);  
console.log(`"Widget".startsWith('wid')=${"Widget".startsWith('Wid')}`); // 시작 단어 찾기
console.log(`"Widget".endsWith('get')=${"Widget".endsWith('get')}`); // 끝단어 찾기


/*************************** 문자열 자르기*********************  */
//substring, substr, slice
str = "stringify";
console.log(`str = "stringify"`); 
console.log(`str.slice(0,5)=${str.slice(0,5)}`); // slice 0부터 5번째 까지 문자열 반환 하는데 5번째는 반환 안함
console.log(`str.slice(2)=${str.slice(2)}`); // 2위치부터 끝까지 문자열 반환
console.log(`str.slice(-4,-1)=${str.slice(-4,-1)}`); // 끝에서 부터 시작 -4 부터 -1 위치까지 자름 

console.log(`str.substring(0,5)=${str.substring(0,5)}`); // slice 비슷하지만 음수 허용 안함

console.log(`str.substr(0,5)=${str.substr(0,6)}`); // 0 부터 4개 반환
console.log(`str.substr(0,5)=${str.substr(6,2)}`); // 6 부터 2개 반환
console.log(`str.substr(0,5)=${str.substr(-3,2)}`); // 끝에서부터 3번째에서 2개 반환


/*************************** 문자열 유니코드 숫자*********************  */
console.log(`"Widget".codePointAt('0')=${"Widget".codePointAt('0')}`); // W 의 코드 표시\
console.log(`String.fromCodePoint('87')=${String.fromCodePoint('87')}`); // W 의 코드 표시
console.log(`String.fromCodePoint('87')=${'\u057a'}`); // W 의 코드 표시

str="";
for(let i=65; i<220; i++){
    str+=String.fromCharCode(i);
}
console.log(str);


// 문자열 심화 추후 공부해야함. 







