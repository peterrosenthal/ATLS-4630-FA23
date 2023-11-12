import { useState } from 'react';
import './MyButton.css';

export default function MyButton({ isSpecial, text }) {
  let myClassName = '';
  if (isSpecial) {
    myClassName = 'special-button';
  } else {
    myClassName = 'my-button';
  }

  const [ count, setCount ] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className={myClassName} onClick={handleClick}>{text} clicked:{count}</button>
  );
}
