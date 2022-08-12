// import styled from "styled-components";



const MyComponents = ({name, children}) => {

  return (
    <div>
      안녕하세요, 제 이름은  {name} 입니다. <br/>
      다음은 {children} 입니다.<br/>
    </div>
  )
}


export default MyComponents;