import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {Increment, Decrement} from './Reduux';

function App() {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch();
  // console.log(state)
  const {value} = state;
  return (
    <div className="App">
      <h1>Counter:{value}</h1>
      <button onClick = { () => (dispatch(Increment()))}>Incremnet</button>
      <button onClick = { () => (dispatch(Decrement()))}>Decremnet</button>
    </div>
  );
}

export default App;
