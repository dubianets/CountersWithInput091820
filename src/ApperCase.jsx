import React,{useState} from "react";

export default  function ApperCase(props){

    const [value, setValue] = useState('');

    const inputHandler = (event) => {
        setValue(+(event.target.value));
    }

    const addButtonHandler = () => {
        props.addCuonter(value);
        setValue('');
    }



    return (
        <div>
            <button onClick={addButtonHandler}>Add counter</button>
            <button onClick={props.refreshAll}>Refresh all</button>
            <button onClick={props.resetCounters}>reset</button>
            <input type="text" onChange={inputHandler} value={value}/>
        </div>
    )
}