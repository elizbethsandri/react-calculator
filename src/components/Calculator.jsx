import React, { useState } from "react";
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator() {
    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] =useState(0);
    const [operator, setOperator] =useState();

    function InputNumber(e) {
        var input=e.target.value;
        if (number === 0) {
            setNumber(input);
        } else {
            setNumber(number + input);
        }
    }

    function Clear() {
        setNumber(0);
    }

    function Percentage() {
        setNumber(number / 100);
    }

    function ChangeSign() {
        if (number > 0) {
            setNumber(-number);
        } else {
            setNumber(Math.abs(number));
        }
    }

    function OperatorHandler(e) {
        var operatorInput=e.target.value;
        setOperator(operatorInput);
        setOldNumber(number);
        setNumber(0);
    }

    function Calculate() {
        if (operator === "/") {
            setNumber(oldNumber / number);
        } else if (operator === "-") {
            setNumber(oldNumber - number);
        } else if (operator === "x") {
            setNumber(oldNumber * number);
        } else if (operator === "+") {
            setNumber(parseFloat(oldNumber) + parseFloat(number));
        }
    }

    return (
    <div>
    <Box m={12}/>
    <Container maxWidth="xs"> 
    <div className="Wrapper"> 
      <h1 className="Result">{number}</h1>
      <button onClick={Clear}>AC</button>
      <button onClick={ChangeSign}>+/-</button>
      <button onClick={Percentage}>%</button>
      <button className="Orange" onClick={OperatorHandler} value='/'>/</button>     
      <button className="Gray" onClick={InputNumber} value={7}>7</button>  
      <button className="Gray" onClick={InputNumber} value={8}>8</button>     
      <button className="Gray" onClick={InputNumber} value={9}>9</button>
      <button className="Orange" onClick={OperatorHandler} value='x'>X</button>
      <button className="Gray" onClick={InputNumber} value={4}>4</button>  
      <button className="Gray" onClick={InputNumber} value={5}>5</button>       
      <button className="Gray" onClick={InputNumber} value={6}>6</button>
      <button className="Orange" onClick={OperatorHandler} value='-'>-</button>   
      <button className="Gray" onClick={InputNumber} value={1}>1</button>
      <button className="Gray" onClick={InputNumber} value={2}>2</button>
      <button className="Gray" onClick={InputNumber} value={3}>3</button> 
      <button className="Orange" onClick={OperatorHandler} value='+'>+</button>  
      <button className="Gray Zero" onClick={InputNumber} value={0}>0</button>
      <button className="Gray" onClick={InputNumber} value='.'>,</button> 
      <button className="Orange" onClick={Calculate}>=</button>
    </div>
    </Container>
    </div>
    );
}
