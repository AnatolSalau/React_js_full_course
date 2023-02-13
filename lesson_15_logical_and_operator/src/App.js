import {useState} from "react";

import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
import Reload from "./components/Reload";



function App() {
    const [count, setCount] = useState(0);
    //Add value in Counter by useState hook
    const incrementCount = () => {
       setCount(count + 1);
    }



    //Reset value in Counter by useState hook
    const resetCount = () => {
        setCount(0)
    }
    const texts = [
        'Click me',
        'Click me please',
        'Hit me',
        'Press me',
        'Click me again'
    ];
    return (
    <div className="App">
        <Counter count={count}/>
        {
            texts.map((text, index)=> {
                return (
                    <Button onClick={incrementCount}
                               text={text} key={index}
                    />
                )
            })
        }
        {/*Use "&&" instead of "if"*/}
        {
            count > 0 && (
                <Reload onClick={resetCount}/>
            )
        }
        {/* Or we can use ternary operator */}
        {
            count > 0 ? (
                <Reload onClick={resetCount}/>
            ) : null
        }
    </div>
    );
}

export default App;
