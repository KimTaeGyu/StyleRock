import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//component를 통해 Box태그를 만들었으면 불러내야하는데
//그 명령어가 import (Tagname) from '(경로)'


//1. 박스 2개 (타이틀 , 사진, 결과)
//2. 가위바위보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보인다
//4. 컴퓨터는 랜덤하게 아이템이 선택이 된다
//5. 3,4번의 겨로가를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에 따라서 테두리 색이 바뀐다 (win-green, lose-red, tie-black)
const choice={
  rock:{
    name:"Rock",
    img:"http://gdimg.gmarket.co.kr/463593049/still/600?ver=1552208453"
  },
  scissors:{
    name:"Scissors",
    img:"http://m.jubangtong.com/web/product/big/201805/4350_shop1_15266915623319.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://www.ikea.com/kr/en/images/products/mala-drawing-paper-roll__0710263_pe727430_s5.jpg"
  }
}

function App() {
  const [userSelect,setUserSelect] = useState(null)
  const [CompueterSelect,setComputerSelect] = useState(null)
  const [result,setResult]=useState("")
  //State함수는 무조건 set~~ 으로 관리를 해야함 
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice))
    
  };

  const judgement=(user,computer)=>{
    if(user.name==computer.name){
      return "Tie"
    }else if(user.name =="Rock")return computer.name=="Scissors"?"win":"lose"
    else if(user.name=="Scissors")return computer.name=="Paper"?"win":"lose"
    else if (user.name=="Paper")return computer.name=="Rock"?"win":"lose"
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 배열로 만들어주는 함수이다.
    console.log("Array",itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    //Math.floor 는 뒤에 숫자를 없애주는 함수??
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={CompueterSelect} result={result}/>
        </div>
        <div className='main'>
          <button className='button'onClick={()=>play("scissors")}>가위</button>
          <button className='button' onClick={()=>play("rock")}>바위</button>
          <button className='button'onClick={()=>play("paper")}>보</button>
        </div>
      </div>
  );
}
// onClick 함수를 쓸때 뒤에 호출하는 함수가 아닌 콜백함수로 넣어줘야됨
// onClick={play("scissors")}이렇게 해버리면 함수를 바로 실행함
// 함수를 전달하는 형식으로 넣어 줘야 함.
// 즉 ()=> 이러헥 넣어준거임
export default App;
