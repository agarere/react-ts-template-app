import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { decrement, increment, setCounter } from '../../store/CounterSlice'
import CounterLabel from './CounterLabel';

function CounterPage() {
  const dispatch = useDispatch();

  console.log("CounterPage component render edildi!");

  return (
    <>
      <div className="card">
        <CounterLabel />
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button
            onClick={() => dispatch(increment())}
            variant="primary"
          >
            Increment
          </Button>
          <Button
            onClick={() => dispatch(decrement())}
            variant="primary"
          >
            Decrement
          </Button>
          <Button
            onClick={() => dispatch(setCounter(0))}
            variant="primary"
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  )
}

export default CounterPage