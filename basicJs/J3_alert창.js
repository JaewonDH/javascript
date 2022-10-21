let study=false;

if(study){
    alert("alert 확인창 출력")

    const str="나이를 입력해주세요";
    let age=prompt(str, 100);
    alert(`당신의 나이는 ${age}`);
    console.log(age);
        
    let value=confirm("당신은 자동차를 좋아하나요?"); // 확인 취소 창
    console.log(value);            
}else{
    //report

    let name=prompt("이름을 입력해주세요",''); // 사용자 입력
    document.write(`이름은 ${name} 입니다.`);
}
