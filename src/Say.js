import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';

const Say =() => {
  const [message, setMessage] = useState('클릭하면 인사');
  const enter = () => setMessage('안녕하세요');
  const exit = () => setMessage('안녕히가세요');

  // 1. 객체의 사본 만들 때는 spread 연산자
  // const object = { a: 1, b: 2, c: 3 };
  // const nextObject = { ...object, b: 4};

  useEffect(()=> {
    console.log("메세지가 바뀔 때마다 발행");
  },[message])

  //2. 배열의 사본 만들 때는 배열 내장 함수
  // const array = [
  //   {id: 1, value: true},
  //   {id: 2, value: true},
  //   {id: 3, value: false},
  // ]
  // let nextArray = array.concat({id:4, value: false}); 
  // console.log(nextArray);

  return (
    <div>
      <button className=".button">버튼!</button>
      <Button onClick={enter}>입장</Button>
      <Button onClick={exit}>퇴장</Button>
      <h1>{message}</h1>
    </div>
  )
};

const Button = styled.button`
  margin-right: 10px; 

`


export default Say; 