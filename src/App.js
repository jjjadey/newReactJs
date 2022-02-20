import './App.css';
import { useSelector } from 'react-redux';
import { increment, decrement } from './actions'
import { useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        {isLogged ? <h1>log in</h1> : <h1>log out</h1>}
      </header>
    </div>
  );
}

export default App;
