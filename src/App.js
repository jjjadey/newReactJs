import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counter';
import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{`The counter is ${count}`}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>incrementBy 5</button>
      </header>
    </div>
  );
}

export default App;
