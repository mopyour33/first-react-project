import React from 'react'

const Box = (props) => {
  let result;
  if (props.title === "Computer" &&
      props.result !== "tie" &&
      props.result !==""){
    //카드가 computer 카드인가? && 결과가 비긴건 아닌가? && props.reuslt에 값이 있는가?
    result = (props.result === "win" ? "lose" : "win");
  }else {
    //위의 경우가 아니면 props&nbsp;로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  //console.log("props:", props)
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
        {/* //최초 실행시 에러를 방지하기 위해 가드를 넣어준다. props.item && */}
      <img className="item-img" src={props.item && props.item.img} alt=""/>
      <h2>{result}</h2>
    </div>
  )
}

export default Box
