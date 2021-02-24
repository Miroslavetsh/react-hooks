import React, { useState, useEffect } from 'react';

function App() {

  const [type, setType] = useState('users')
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  })
  // useEffect(() => {
  //   console.log('render')
  // })

  const mousemoveHandler = (event) => {
    setPos({
        x: event.clientX,
        y: event.clientY,
      })
  }

  useEffect(() => {
    console.log(`ComponentDidMount`);

    window.addEventListener('mousemove', mousemoveHandler)

    return () => {
      window.removeEventListener('mousemove', mousemoveHandler)
    }
  }, [])

  return (
    <div>
      <h1>Resource: {type}</h1>

      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}

export default App;
