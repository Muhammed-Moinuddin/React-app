import {useState, useEffect, useRef} from 'react';

const MoinState = () => {
  const [inputValue, setInputValue] = useState("");
  const prevState = useRef("");
  useEffect(() => {
    prevState.current = inputValue;
  }, [inputValue]);
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <h3>Current Value: {inputValue}</h3>
        <h3>Previous Value: {prevState.current}</h3>
    </div>
  )
}

export default MoinState;