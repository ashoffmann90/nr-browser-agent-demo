import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  newrelic.interaction().setName('increase counter').actionText(`Count is ${count}`).save()

  return (
    <div className="App">
      <h1>Silly Little Counter</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
        }}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
