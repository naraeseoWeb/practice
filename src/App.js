import styled from "styled-components";
import MyComponents from "./pages/MyComponents.js";
import Counter from "./Counter.js";
import Say from "./Say";
import Dropdown from "./pages/Dropdown.jsx";


const App = () => {
  const name = 'React';

  return (
    <>
      <Header className="react">
        <div>
          {name}
        </div>
      </Header>
      <Div>
        <MyComponents name={"react"}>자식</MyComponents>
        <Counter />
      </Div>
      <Div>
        <Say></Say>
      </Div>
      <Div>
      </Div>
      <Space>
        <Dropdown />
      </Space>
    </>
  )
  

}

const Header = styled.header`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 100px;
  width: 100%;
  background-color: black;
  font-weight: 700;
  color: white;
  font-size: 20px;
`
const Div = styled.div`
  display: none;
  line-height: 40px; 
  font-weight: 700;
  padding-left: 30px; 
`

const Space = styled.div`
  padding: 20px;
`
export default App;
