import { useReducer } from 'react'

type CounterType = {
    count: number
}

type ActionType = {
    type: string,
    payload: number
}

type ResetType = {
    type: 'reset'
}

type CounterAction = ActionType | ResetType

const initialstate = { count: 0 };

const reducer = (state: CounterType, action: CounterAction) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - action.payload };
        case "reset":
            return initialstate;
        default:
            return state;
    }
};

export default function ReducerExample() {

    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <>
            <div>Number: {state.count}</div>
            <button onClick={() => dispatch({ type: "increment", payload: 15 })}>15 increase</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 15 })}>15 descrease</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    )
}
