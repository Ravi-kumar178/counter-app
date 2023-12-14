import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {increment, decrement } from "../Redux/Slice/CounterSlice"

function Counter() {

    const count = useSelector((state) => (state.counter.value));

    const dispatch = useDispatch();

  return (
    <div>
        <button
         onClick={() => dispatch(increment())}
        >
             Increment
        </button>

        <div>
            {count}
        </div>

        <button
        onClick={() => dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter