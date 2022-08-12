import { useState } from 'react'

let Counter = () => {
  let [ num, setNum ] = useState([0,0,0]);

  return (
    <div>
      <div>변하는 숫자: { num[0] }</div>
      <div>변하지 않는 숫자: { num[1] }</div>
      <button onClick={ ()=> {
        let copy = [...num];
        copy[0] = copy[0] + 1;
        setNum(copy);
      }}>숫자 더하기</button>




    </div>
  )
}

export default Counter;
