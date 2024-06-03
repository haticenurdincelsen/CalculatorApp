import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Button from './components/button';
import Input from './components/İnput';

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (value) => {
    setText((text) => [...text, value]);
  };

  const calculateResult = () => {
    const input = text.join("");
    try {
      setResult(math.evaluate(input));
    } catch (error) {
      setResult("Hata");
    }
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color="#00AD85" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color="#00AD85" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color="#00AD85" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color="#00AD85" handleClick={addToText} />
        </div>
        <Button symbol="Clear" color="red" handleClick={resetInput} />
      </div>
    </div>
  );
}

export default App;
