import React, { useState } from "react";
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator() {
    const [number, setNumber] = useState(0);

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

    return (
    <div>
    <Box m={12}/>
    <Container maxWidth="xs"> 
    <div className="Wrapper"> 
      <h1 className="Result">{number}</h1>
      <button onClick={Clear}>AC</button>
      <button onClick={ChangeSign}>+/-</button>
      <button onClick={Percentage}>%</button>
      <button className="Orange">/</button>     
      <button className="Gray" onClick={InputNumber} value={7}>7</button>  
      <button className="Gray" onClick={InputNumber} value={8}>8</button>     
      <button className="Gray" onClick={InputNumber} value={9}>9</button>
      <button className="Orange">X</button>
      <button className="Gray" onClick={InputNumber} value={4}>4</button>  
      <button className="Gray" onClick={InputNumber} value={5}>5</button>       
      <button className="Gray" onClick={InputNumber} value={6}>6</button>
      <button className="Orange">-</button>   
      <button className="Gray" onClick={InputNumber} value={1}>1</button>
      <button className="Gray" onClick={InputNumber} value={2}>2</button>
      <button className="Gray" onClick={InputNumber} value={3}>3</button> 
      <button className="Orange">+</button>  
      <button className="Gray" onClick={InputNumber} value={0}>0</button>
      <button className="Gray" onClick={InputNumber} value={`,`}>,</button> 
      <button className="Orange">=</button>
    </div>
    </Container>
    </div>
    );
}
