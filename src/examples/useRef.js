import { render } from '@testing-library/react';
import React, { useState, useEffect, useRef } from 'react';

// let renderCount = 1

function App() {

  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value);
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>renderCount: {renderCount.current}</h1>
      <h2>Previous value: {prevValue.current}</h2>
      <input ref={inputRef} onChange={e => setValue(e.target.value)} value={value} type="text" /> 
      <button className="btn btn-success" onClick={focus}>Focus</button>
    </div>
  )
}

export default App;
