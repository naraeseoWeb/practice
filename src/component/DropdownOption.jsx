import styled from "styled-components";
import React from "react";
import data from "../pages/data"
import { useState } from "react"



const DropdownOption = () => {
  console.log(data[1].categoryName);

  return (
    <>
      <Border>
        {
          data.map(function(a, i){
            return ( <Item key={i}>{data[i].categoryName}</Item> )
          })
        }
      </Border> 
    </>
  )

}

const Border = styled.div`
  width: 200px;
  border-radius: 5px;
  border: 1px solid gray;
`
const Item = styled.div`
  width: 100%;
  text-indent: 10px;
  line-height: 30px;
`

export default DropdownOption;