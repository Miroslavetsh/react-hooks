import { render } from '@testing-library/react';
import React, { useState, useMemo, useEffect } from 'react';

function complexCompute(num) {

  let i = 0;

  while (i < 10000000) i++
  return num * 2
}

function App() {

  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
      color: colored ? 'darkred' : 'black'
    }), [colored])

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Computed: {computed}</h1>

      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Add</button>  
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Remove</button>  
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Toggle</button>  
    </div>
  )
}

export default App;
