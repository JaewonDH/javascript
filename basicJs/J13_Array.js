let arr = [
    '1',
    1, 
    {
        name: 'jaewon',
        age:18
    },
    true,
    NaN,
]

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);

let fruits=['사과','오렌지','배'];

// Pop은 배열 끝에 요소를 제거하고 제거한 요소를 반환
let value=fruits.pop();
console.log(fruits);
console.log(value);

// push 배열 끝에 요소를 추가 
fruits.push('딸기',"레몬");
console.log(fruits);

// shift 배열 앞에 요소를 제거
fruits=['사과','오렌지','배'];
value=fruits.shift();
console.log(fruits);
console.log(value);

// unshift 앞에 요소를 추가 
fruits=['사과','오렌지','배'];
fruits.unshift('포도','귤');
console.log(fruits);


// 배열 length 값을 줄이면 배열 이 자동으로 줄어든다 
fruits=['사과','오렌지','배'];
fruits.length=2;
console.log(fruits);

// splice 배열 요소 추가 제거 
arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // 인덱스 1 부터 1개 제거 
console.log(arr);

arr = ["I", "study", "JavaScript"];
arr.splice(1, 2); // 인덱스 1부터 2개 제거 
console.log(arr);

arr = ["I", "study", "JavaScript"];
arr.splice(1, 1,'A','B'); // 인덱스 1 부터 1개 제거 후 1에 위치에 A, B 추가
console.log(arr);

arr = ["I", "study", "JavaScript"];
arr.splice(1, 0,'A','B'); // 인덱스 1에 위치에 A, B 추가  STUDY가 제거 안됨
console.log(arr);


// slice 배열 요소 추가 제거 
arr = ["t", "e", "s", "t"];
let a= arr.slice(1, 3); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))
console.log(a);
let b= arr.slice(-2); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)
console.log(b);

let c =arr.slice(); // 복사됨
console.log(c);

// concat 기존배열에 배열 추가 
arr = [1, 2];
let newArr=arr.concat([3, 4]);
console.log(newArr);
newArr=arr.concat([3, 4], [5, 6]);
console.log(newArr);
newArr=arr.concat([3, 4], 5,'7');
console.log(newArr);


// indexOf, lastIndexOf와 includes
strArray = ["t", "e", "s", "t"];
let index=strArray.indexOf('e'); // 앞에서 찾아서 index 반환
console.log(index);
index=strArray.lastIndexOf('e'); // 뒤에서 찾아서 index 반환
console.log(index);

let find=strArray.includes('e'); // 값이 있는지 확인 후 boolean 반환
console.log(find);


// 배열 반복문
fruits=['사과','오렌지','배','포도','귤','토마토'];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for(fruit of fruits){
    console.log(fruit);
}

// for Each문은 배열 요소에 대해서 반복할 수 있다.
strArray = ["t", "e", "s", "t"];
strArray.forEach( (item,index,array) => {
    console.log(`item=${item}, index=${index}, array=${array}`);
});

// find 찾기 함수에서 조건에 맞는 return true를 주면 해당 반환 해당에 조건에 맞는 첫번째 true의 값만 반환
// 아래예시는 Pete object 반환함.
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

console.log('-------------------------------Find--------------------------')
find= users.find(item => {
     if(item.name==='Pete'){
        return true;
     }
});

console.log(`find=${typeof find}`);
console.log(`find length=${find.length}`);
console.log(`find=${find}`);
console.log(`find=${find.name}`);

// filter 는 조건에 맞는 배열의 내용을 array로 반환 
console.log('-------------------------------filter--------------------------')
userArray= users.filter( (item,index,array) =>{
    if(item.id > 1){
        return true;
    }
});
console.log(`userArray typeof=${typeof userArray}`);
console.log(`userArray length=${userArray.length}`);
console.log(`userArray[0]=${userArray[0]}`);
console.log(`userArray[0]=${userArray[0].name}`);
console.log(`userArray[1]=${userArray[1]}`);
console.log(`userArray[1]=${userArray[1].name}`);


console.log('-------------------------------map--------------------------')
// map return 하는 값을 배열로 반환 
let userNames= users.map((item,index) =>{
    return item.name;
});
console.log('userNames:'+userNames);
console.log('userNames:'+userNames);


// sort 
arr = [ 1, 15, 20,3 ];
arr.sort((a,b)=>{
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
});
console.log(arr);

let countries = ['Österreich', 'Andorra', 'Vietnam'];
countries.sort((a,b)=>{
    return a.localeCompare(b)
});
console.log(countries);

// 역순으로 정렬
arr.reverse();
console.log(arr);

// splite  문자열의 기호에 따라 구분하여 배열로 변환
let names = 'Bilbo, Gandalf, Nazgul';
arr = names.split(', ');
console.log(arr);
names = "test";
arr = names.split('');
console.log(arr);

// join 배열을 특정 문자를 추가하여 문자열로 변경 
arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';');
console.log(str);

// 배열인지 확인
Array.isArray(arr);
console.log(Array.isArray(arr));


// iterable object 복사하여 배열로 만듬
let newArrA=Array.from(arr);
console.log(newArrA);