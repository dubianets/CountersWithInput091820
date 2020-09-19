import React from "react";

export default function CounterList (props) {

const count = props.el;


const counterDelete = () => {
    props.counterDelete(props.index);
}

    return (

        <div>

            <button onClick={ () => props. counterChanger(props.index, 1)}>+1</button>
            <button onClick={ () => props. counterChanger(props.index, 2)}>+2</button>
            <button onClick={ () => props. counterChanger(props.index, 3)}>+3</button>
            {count}
            <button onClick={() => props. counterChanger(props.index,-1)}>-1</button>
            <button onClick={() => props. counterChanger(props.index,-2)}>-2</button>
            <button onClick={() => props. counterChanger(props.index,-3)}>-3</button>
            <button onClick={counterDelete}>delete</button>
        </div>

    )
}