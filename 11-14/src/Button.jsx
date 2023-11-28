import { useContext } from "react";
import { CountContext } from "./CountContext.jsx";

export default function Button({ count, incrementCount }) {
  const countThroughContext = useContext(CountContext);

  return (
    <button onClick={incrementCount} >Button has been clicked {countThroughContext} times!</button>
  );
}
