import './App.css';
import Box from './component/Box';
import { useState } from 'react';

//1. 박스 2개(타이틀, 사진정보, 결과값)
//2. 가위바위보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패결과에 따라 테두리 색이 바뀐다.(이기면 초록, 지면 빨강, 비기면 검은색)

const choice = {
  rock:{
    name:"Rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHIiwU8uVoAk9ky8t15hYouYcWK5MANg7Ig&s"
  },
  scissors: {
    name:"Scissors",
    img:"https://www.mouser.kr/images/marketingid/2020/img/177933245.png?v=041624.0443"
  },
  paper: {
    name:"Paper",
    img:"https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/a4_ivory_card_/.jpg"
  }
};

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  //const [userCss, setUserCss] = useState("box");
  //const [computerCss, setComputerCss] = useState("box");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomchoice();
    setComputerSelect(computerChoice);
    
    setUserResult(judgement(choice[userChoice], computerChoice));
    
    //setUserCss(judgement_css(choice[userChoice], computerChoice));
    //setComputerCss(judgement_css(computerChoice, choice[userChoice]));
    //console.log("CSS:", judgement_css(choice[userChoice], computerChoice))
  };

  const judgement = (left, right) => {
    //console.log("user:", user, "computer:", computer)
    //user === computer -> tie
    //user === rock, computer === scissors -> user 이긴거
    //user === rock, computer === paper -> user 진거
    //user === scissors, computer === paper -> user 이긴거
    //user === scissors, computer === rock -> user 진거
    //user === paper, computer === rock -> user 이긴거
    //user === papaer, computer === scissors -> user 진거

    if(left.name === right.name) {
      return "tie";
    }else if(left.name === "Rock" ) return right.name === "Scissors" ? "win" : "lose"
    else if(left.name === "Scissors" ) return right.name === "Paper" ? "win" : "lose"
    else if(left.name === "Paper" ) return right.name === "Rock" ? "win" : "lose"
    }

  // const judgement_css = (left, right) => {

  //   if(left.name === right.name) {
  //     return "box";
  //   }else if(left.name === "Rock" ) return right.name === "Scissors" ? "box_win" : "box_lose"
  //   else if(left.name === "Scissors" ) return right.name === "Paper" ? "box_win" : "box_lose"
  //   else if(left.name === "Paper" ) return right.name === "Rock" ? "box_win" : "box_lose"
  //   }

  const randomchoice = () => {
    let itemArray= Object.keys(choice); //객체에 key값만 뽑아서 array로 만들어주는 함수(object.keys)
    //console.log("item Array:",itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    //console.log("final:",final)
    return choice[final];
    //console.log("random value :", randomItem);
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={userResult}/>
        <Box title="Computer" item={computerSelect} result={userResult}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>

    </div>
  );
}

export default App;
