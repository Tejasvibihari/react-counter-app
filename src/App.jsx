import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={handleCount}>+</button>
    </div>
  )
}
