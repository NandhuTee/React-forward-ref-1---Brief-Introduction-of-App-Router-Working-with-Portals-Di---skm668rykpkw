'use client'
import React, { useRef, useState } from 'react';
import InputField from './InputField';

function Home() {
  const inputRef =useRef();
  const [values, setValues] = useState('');

  const settingValue =() => {
    const inputValue =inputRef.current.value;
    setValues(inputValue);
  };

  const focusInput =() => {
    inputRef.current.focus();
  };

  return (
    <div>
      <InputField ref={inputRef} type="text" />
      <br />
      <button id="settingValueButton" onClick={settingValue}>
        Set Value
      </button>
      <button id="focusInputButton" onClick={focusInput}>
        Focus the input
      </button>
      <br />
      <br />
      <textarea id="textarea" value={values}></textarea>
    </div>
  );
}

export default Home;
