import React, {useEffect, useState} from 'react';

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {

  // const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')

  // const changeHandler = event => {
  //   setName(event.target.value)
  // }
  
  // useLogger(name)

  // const lastNameHandler = event => {
  //   setLastName(event.target.value)
  // }

  const input = useInput('')

  useLogger(input.value)

  return (
      <div className={'container pt-3'}>
        <input type="text" {...input.bind} />
        <button className="btn btn-warning" onClick={() => input.clear()}>Clear</button>
        {/* <input type="text" value={lastName} onChange={lastNameHandler} /> */}
        <hr />
        <h1>{input.value}</h1>

      </div>
  )
}

export default App;
