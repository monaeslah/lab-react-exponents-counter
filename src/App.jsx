import './App.css'
import { useState } from 'react'
import Counter from './components/Counter'
import Exponent from './components/Exponents'

function App () {
  const [count, setCount] = useState(0)

  const decrement = () => setCount(prevCount => prevCount - 1)
  const increment = () => setCount(prevCount => prevCount + 1)
  return (
    <div className='App'>
      <h2>
        <em>Counter</em>
      </h2>

      <Counter
        callBackDecrement={decrement}
        callBackIncrement={increment}
        callBackCount={count}
      />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className='container'>
        <Exponent callBackCount={count} power={2} />
        <Exponent callBackCount={count} power={3} />
        <Exponent callBackCount={count} power={4} />
        <Exponent callBackCount={count} power={5} />
        <Exponent callBackCount={count} power={6} />
      </div>
    </div>
  )
}

export default App
