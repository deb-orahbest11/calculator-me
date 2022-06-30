 import { useState } from 'react'

import * as math from 'mathjs'

import React from 'react'
import Button from './Components/Button'
import Input from './Components/input'

const App =() => {

const [text, setText]= useState('');
const [result, setResult]= useState('');

const addToText = (val) => {
  setText((text) =>[...text,val +" "])
} 

const calculateResult =() => {
  const Input = text.join("") // Remove commas

  setResult(math.evaluate(Input));
}

const resetInput =()=>{
  setText("")
  setResult("")
}

  return (
    <div className='App'>
      <div className='calc'>
        <Input text={text} result={result} />
        <div className='row'>
         <Button symbol='7' handleClick={addToText}/>
         <Button symbol='8' handleClick={addToText} />
         <Button symbol='9' handleClick={addToText}/>
         <Button symbol='/' color="black" handleClick={addToText}/>
        </div>
        <div className='row'>
         <Button symbol='4' handleClick={addToText}/>
         <Button symbol='5' handleClick={addToText}/>
         <Button symbol='6' handleClick={addToText}/>
         <Button symbol='*' color="black" handleClick={addToText}/>
        </div>
        <div className='row'>
         <Button symbol='1' handleClick={addToText}/>
         <Button symbol='2' handleClick={addToText}/>
         <Button symbol='3' handleClick={addToText}/>
         <Button symbol='+' color="black" handleClick={addToText}/>
        </div>
        <div className='row'>
         <Button symbol='0' handleClick={addToText}/>
         <Button symbol='.' handleClick={addToText}/>
         <Button symbol='=' handleClick={calculateResult} />
         <Button symbol='-' color="black" handleClick={addToText}/>
        </div>
        <Button symbol='clear'color="brown" handleClick={resetInput}/>
      </div>
    </div>
  )
}

export default App