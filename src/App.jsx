import { useEffect, useState, useRef, useReducer } from 'react';
import Car from './Car';
import Goal from './Goal';
import List from './List';
import Context from './Context';
// import MoinState from './MoinState';


function App() {
  const [inputValue, setInputValue] = useState("");
  const myCount = useRef(0);
  const [color, setColor] = useState("Red");
  const [count, setCount] = useState(0);
  const [motorCycle, setMotorCycle] = useState({
    brand: "Honda",
    model: "CD 200",
    year: 1983,
    color: "red"
  })
  const [state, dispatch] = useReducer(reducer, {count: 0});

  function reducer(state, action){
    if(action.type == "increment"){
      return {count: state.count + 1}
    } else if (action.type == "decrement") {
      return {count: state.count - 1}
    }
  }

  function increment(){
    dispatch({type: "increment"});
  }
  function decrement(){
    dispatch({type: "decrement"});
  }
  const motorCycleHandler = () => {
    setMotorCycle(prevState => {
      return motorCycle.color == "red" ? {...prevState, color: "blue"} : {...prevState, color: "red"}
    })
  }
  useEffect(() => {
    myCount.current = myCount.current + 1;
  });
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  //   return () => clearTimeout(timer)
  // }, [])
const carInfo = {"name": "Car", "level": "high"};
const listData = [
  {id: 1, brand: "Ford"},
  {id: 2, brand: "Mercedes"},
  {id: 3, brand: "Toyota"}
]
  return (
    <>
      {/* <Car brand="Folks"/> */}
      {/* <MoinState/> */}
      <h2>I've rendered {count} times</h2>
      <h2>Color of my Car is {color}</h2>
      <h2>My favourite motorbike is {motorCycle.brand}, and it's {motorCycle.model} is pretty cool. I used to have it of year {motorCycle.year} and color was {motorCycle.color}</h2>
      <Car brand={carInfo}/>
      <Goal isGoal={true}/>
      <List data={listData}/>
      <button onClick={() => color == "Red" ? setColor("Blue") : setColor("Red")}>Change Color</button>
      <button onClick={motorCycleHandler}>Change MotorCycle Color</button>
      <Context/>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <h2>Render Count: {myCount.current}</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default App
