import React, {useState} from 'react';
import CounterList from "./CounterList";
import ApperCase from "./ApperCase";


function App() {

    const [counters, setCounters] = useState([0, 0, 0])

    const resetCounter = [0, 0, 0];

    const addCuonter = (value) => {
        const newCounter = [...counters];
        value = value ? value : 0;
        newCounter.push(value);
        setCounters(newCounter);
    }

    const refreshAll = () => {
        const arrRefresh = counters.map(el => el = 0);
        setCounters(arrRefresh);
}

    const resetCounters = () => {
        setCounters(resetCounter);
    }


    const counterDelete = (index) => {
        const arrDelete = counters.filter((el, i) =>{
            return index !== i ? true : false;
        })
        setCounters(arrDelete);
    }

const counterChanger = (index, val) => {

        const arrChange = counters.map((el, i) => {
            if(index === i){
               return  el + val;
            }
            return el;
        })
        setCounters(arrChange);
    }



    return (
        <div>

          <ApperCase addCuonter={addCuonter} refreshAll={refreshAll} resetCounters={resetCounters} />
          <hr/>
            <div>

                {counters.map((el, index) => <CounterList counterDelete={counterDelete}  counterChanger={counterChanger}  index={index} el={el} key={Math.random()}/>)}

            </div>
        </div>
    );
}

export default App;
