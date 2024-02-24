import { useEffect } from 'react';
import Car from './Car';
import Goal from './Goal';
import List from './List';
import { useState } from 'react';
import Context from './Context';


function App() {
  const [color, setColor] = useState("Red");
  const [count, setCount] = useState(0);
  const [motorCycle, setMotorCycle] = useState({
    brand: "Honda",
    model: "CD 200",
    year: 1983,
    color: "red"
  })

  const motorCycleHandler = () => {
    setMotorCycle(prevState => {
      return motorCycle.color == "red" ? {...prevState, color: "blue"} : {...prevState, color: "red"}
    })
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer)
  }, [])
const carInfo = {"name": "Car", "level": "high"};
const listData = [
  {id: 1, brand: "Ford"},
  {id: 2, brand: "Mercedes"},
  {id: 3, brand: "Toyota"}
]
  return (
    <>
      {/* <Car brand="Folks"/> */}
      <h2>I've rendered {count} times</h2>
      <h2>Color of my Car is {color}</h2>
      <h2>My favourite motorbike is {motorCycle.brand}, and it's {motorCycle.model} is pretty cool. I used to have it of year {motorCycle.year} and color was {motorCycle.color}</h2>
      <Car brand={carInfo}/>
      <Goal isGoal={true}/>
      <List data={listData}/>
      <button onClick={() => color == "Red" ? setColor("Blue") : setColor("Red")}>Change Color</button>
      <button onClick={motorCycleHandler}>Change MotorCycle Color</button>
      <Context/>
    </>
  )
}

export default App
