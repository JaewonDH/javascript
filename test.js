function filterRange(arr,start,end) {
    return arr.filter( item=> item >= start && item < end);
}

function filterRangeInPlace(arr,start,end) {
    arr=filterRange(arr, start, end);    
    console.log(arr);
}


let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 3, 8);
filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함
console.log(filtered);
console.log(arr);


function pow(x, n) {    
    console.log(`1 x=${x}, n=${n}`);
    if (n == 1) {
        console.log(`4 x=${x}, n=${n}`);
      return x;
    } else {     
        console.log(`2 x=${x}, n=${n}`);
        let value=pow(x, n - 1);        
        console.log(`3 x=${x}, n=${n} value=${value}`);   
      return x * value;
    }
}

let total=pow(2,5);
console.log(total);


function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();  
  console.log(counter);
  console.log(counter());
  console.log(counter());
  console.log(counter());
  