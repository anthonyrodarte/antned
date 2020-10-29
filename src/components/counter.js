import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectCount } from './counterSlice.js';

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    // }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => dispatch(increment())}>
                Click me
            </button>
        </div>
    );
}

export default Counter;
