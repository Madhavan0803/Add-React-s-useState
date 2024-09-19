import React, { useState } from 'react';


function Formcomp() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  function handleNum1(evt) {
    setNum1(evt.target.value);
  }

  function handleNum2(evt) {
    setNum2(evt.target.value);
  }

  function handleResult(evt) {
    evt.preventDefault();
    setResult(Number(num1) + Number(num2));
  }
  

  return (
    <div className="form-container">
      <form className="styled-form">
        <label>Number 1</label>
        <input
          type="number"
          value={num1}
          onChange={handleNum1}
          className="input-field"
        />
        <br />
        <label>Number 2</label>
        <input
          type="number"
          value={num2}
          onChange={handleNum2}
          className="input-field"
        />
        <br />
        <input
          type="submit"
          onClick={handleResult}
          className="submit-btn"
          value="Calculate Sum"
        />
      </form>
      <h1 className="result-display">{result}</h1>
    </div>
  );
}

export default Formcomp;
