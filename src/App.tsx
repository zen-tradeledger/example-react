import { useState } from 'react';
import './App.css';
import ControlledInput from "./ControlledInput"
import UnControlledInput from "./UnControlledInput"

function App() {
  const [controlledValue, setControlledValue] = useState("Foo Corp")
  const [uncontrolledValue, setUncontrolledValue] = useState("Apples")
  return (
    <div className="App">
      <ControlledInput value={controlledValue} onChange={setControlledValue} />
      {uncontrolledValue}
      <UnControlledInput value={uncontrolledValue} onChange={setUncontrolledValue} />
      {uncontrolledValue === "Bananas" ? "True" : "False"}

      <button type="button" onClick={() => {
        setUncontrolledValue("Oranges")
      }}>Fetch state</button>
    </div>
  );
}

export default App;
