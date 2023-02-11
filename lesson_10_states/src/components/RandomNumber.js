import {useState} from "react";
import generateWholeRandomNumFromZero from "../utils/generateWholeRandomNumFromZero";


function RandomNumber({maxNumber}) {
    const [ransomNum, setRandomNum] =
        useState(generateWholeRandomNumFromZero(maxNumber));
    //Change number by setRandomNum
    const changeRandomNum = () => {
      setRandomNum(generateWholeRandomNumFromZero(maxNumber));
    }
    return (
        <div>
            <h1>{ransomNum}</h1>
            <button onClick={changeRandomNum}>Generate new random number</button>
        </div>
    );
}

export default RandomNumber