let count=0;

console.log(`while loop is start`);
while(count < 10){
    ++count;
    console.log(`count is ${count}`);
}

console.log(`do while loop is start`);
count=0;
do{
    ++count;
    console.log(`count is ${count}`);
}while(count < 10);


outer:for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){               
        if(i==5){
            break outer;
        }
        if(j==0 || i==0){
            continue;
        }
        console.log(`${i}*${j}=${i*j}`);        
    }    
}


// let input;
// do{
//     input=prompt("100 보다 큰 숫자를 입력하세요","");    
//     console.log(input);        
// }while(input < 100 && input)

