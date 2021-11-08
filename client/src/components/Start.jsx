/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components';

const StartContainer = styled.div`
width: 250px;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
position: relative;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
input{
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  outline: none;
}
button{
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
}
`;

export const Start = ({ setUsername }) => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setUsername( inputRef.current.value );
  };
  return (
    <StartContainer>
      <input
        type="text"
        placeholder='Enter your name'
        ref={inputRef}
      />
      <button type='button' onClick={() => handleClick()}>Start</button>
    </StartContainer>
  );
};
