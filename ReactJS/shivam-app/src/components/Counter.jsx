import React, { useState } from "react";

function Counter() {
  // Step 1: Create state
  const [count, setCount] = useState(0);

  // Step 2: Event handlers
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>

      {/* Step 3: Display value */}
      <h2>{count}</h2>

      {/* Step 4: Buttons */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ margin: "10px" }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;