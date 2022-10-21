

//JSON.stringify 객체를 JSON으로 바꿔줌
//JSON.parse – JSON을 객체로 바꿔줌.

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};


let jsonData=JSON.stringify(student);
console.log(jsonData);

console.log(`JSON.stringify(1)=${JSON.stringify(1)}`);
//문자열을 JSON으로 인코딩하면 문자열입니다(다만, 큰따옴표가 추가됩니다).
console.log(`JSON.stringify('test')=${JSON.stringify('test')}`);
console.log(`JSON.stringify(true)=${JSON.stringify(true)}`);
console.log(`JSON.stringify([1, 2, 3])=${JSON.stringify([1, 2, 3])}`);


let user = {
  sayHi() { // 무시
    alert("Hello");
  },
  [Symbol("id")]: 123, // 무시
  something: undefined, // 무시
  name: 'John'
};

jsonData=JSON.stringify(user);
console.log(jsonData);

let userA = {
  name: "John Smith",
  age: 35
};

jsonData=JSON.stringify(userA);
console.log(jsonData);

let data=JSON.parse(jsonData);
console.log(data);


let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(meetup);

let newjson=JSON.stringify(meetup, function replacer(key, value) {
  console.log(`key=${key} value=${value} typeofvalue=${typeof value}`);
  // replacer 통해 참조된 meetup를 제거
   if(value==meetup && !key==""){
        return undefined;
    }else{
      return value; 
    }          
})

console.log(newjson);