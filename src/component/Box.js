import React from 'react'
//props는 동적인 값을 호출할때 쓰이는 함수 인듯하다?
const Box = (props) => {
    let result;
  if (
    props.title === "Computer" &&
    props.result !== "Tie" &&
    props.result !== ""  ) {
 // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {// 위의 경우가 아니라면 props&nbsp;로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
    
   // 이부분은 다시 이해하도록 하자 이해한후 다시 깃허브에 올리기
    
  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2 data-testid="item-name">{props.item && props.item.name}</h2>
        <img className='item-img' src={props.item && props.item.img}/>
        <h2>{result}</h2>
    </div>
  )
}

//이쪽에도 마무리부분에 props.result였는데 왜 그냥 result 로 바뀌는지에 대한 이유를 알고 

export default Box
