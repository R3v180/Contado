import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={increment}>Increment</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={decrement}>Decrement</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;