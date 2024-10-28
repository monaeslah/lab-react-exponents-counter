import './App.css'
import { useState } from 'react'
import Counter from './components/Counter'
import ExponentTwo from './components/ExponentTwo'
import ExponentThree from './components/ExponentThree'
import ExponentFour from './components/ExponentFour'
import ExponentFive from './components/ExponentFive'
import ExponentSix from './components/ExponentSix'

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
        <ExponentTwo callBackCount={count} />
        <ExponentThree callBackCount={count} />
        <ExponentFour callBackCount={count} />
        <ExponentFive callBackCount={count} />
        <ExponentSix callBackCount={count} />
      </div>
    </div>
  )
}

export default App
