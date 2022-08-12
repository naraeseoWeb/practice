import styled from "styled-components";
import React from "react";
import { useState } from 'react';


const DropdownBtn = (props) => {
  const[num, setNum] = useState("");


  return (
    <>
      <Button>{props.children}</Button> 
    </>
  )

}

const Button = styled.button`
  color: #ec7807;
  background-color: #fff;
  border: 1px solid #ec7807;
  cursor: pointer;
  width: 140px;
  font-size: 20px;
  box-sizing: border-box;
  overflow: visible;
  line-height: 30px;
  border-radius: 5px;

  &:hover{
    background-color: #ec7807;
    color: #fff;

  }
`

export default DropdownBtn;