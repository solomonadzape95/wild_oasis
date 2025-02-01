import { createContext, useState } from "react";
// 1, create context
const myContext = createContext();

//2. create parent component
export function My() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <myContext.Provider value={{ count, increae, decrease }}>
      <Child />
    </myContext.Provider>
  );
}
// 3. create the child components
function Count() {
  const { count } = useContext(myContext);
  return <span>{count}</span>;
}
function Increase({ icon }) {
  const { increase } = useContext(myContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }) {
  const { decrease } = useContext(myContext);
  return <button onClick={decrease}>{icon}</button>;
}
//4. add the child components to the parent as children
My.Count = Count;
My.Increase = Increase;
My.Decrease = Decrease;

/// TOUSE::
// import {My} from './compComp';
// <My>
// <My.Count/>
// <My.Increase icon="+" />
//  <My.Decrease icon="-" />
// </My>
