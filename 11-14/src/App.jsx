import { useState } from 'react';
import Button from './Button.jsx';
import Card from './Card.jsx';
import { CountContext } from './CountContext.jsx';
import './App.css';

export default function App() {
  const [ count, setCount ] = useState(0);
  const [ countTwo, setCountTwo ] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function incrementCountTwo() {
    setCountTwo(countTwo + 1);
  }

  return (
    <>
      <h1>hello world!</h1>
      <CountContext.Provider value={count}>
        <Button count={count} incrementCount={incrementCount} />
        <Button count={count} incrementCount={incrementCount} />
      </CountContext.Provider>
        <Card padding="large">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestias nihil asperiores quo explicabo itaque cum illo reiciendis ipsam porro, at nobis ratione optio, consequatur consectetur eius corporis similique vitae.</p>
        </Card>
        <Card padding="small">
          <CountContext.Provider value={countTwo}>
            <Button count={count} incrementCount={incrementCountTwo} />
            <Button count={count} incrementCount={incrementCountTwo} />
          </CountContext.Provider>
        </Card>
    </>
  );
}
