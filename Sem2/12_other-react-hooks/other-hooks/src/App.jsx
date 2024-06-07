import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  const handleIncre = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <p>Count state: {count}</p>
      <p>New Count state: {newCount}</p>
      <button
        onClick={() => {
          setNewCount(newCount + 1);
        }}
      >
        Click
      </button>
      <Child handleIncre={handleIncre} />
    </>
  );
}

export default App;