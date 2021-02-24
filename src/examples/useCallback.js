import React, { useState, useCallback } from 'react';
import ItemsList from './itemsList'

function App() {

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `Elemnt number ${i + indexNumber}`)
  }, [count])

  return (
    <div>
      <h1 style={styles}>Element's amount: {count}</h1>

      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Add</button>  
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Toggle</button> 

      <ItemsList getItems={generateItemFromAPI}></ItemsList> 
    </div>
  )
}

export default App;
