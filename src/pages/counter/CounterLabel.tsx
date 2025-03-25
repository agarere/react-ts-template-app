import { useSelector } from 'react-redux'
import { RootState } from '../../store';
function CounterLabel() {
  console.log("CounterLabel component render edildi!");
  const counterValue = useSelector((state: RootState) => state.counter.value);
  return (
    <h2>Counter: {counterValue}</h2>
  )
}

export default CounterLabel