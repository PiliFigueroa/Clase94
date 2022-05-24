import { useState } from 'react';
import './App.css';
import { Caja } from './components/Caja'

function App() {

  // const [text, setText] = useState("Soy una caja")
  // const [showCaja, setShowCaja] = useState(false)

  //const handleClick = () => setText("Otro texto")
  
  // let number = 0

  // const suma = () => {
  //   number++
  //   console.log(number)
  // }

  const [count, setCount] = useState(0)

  const restar = () => {
    if (count > 0) {
      setCount(count-1)
    } else {
      alert("llegaste al minimo")
    }
  }

  const sumar = () => {
    if (count < 10) {
      setCount(count+1)
    }
  }

  return (
    <div className="App">
      {/* {showCaja && <Caja texto={text} />}
      <button onClick={() => setShowCaja(!showCaja)}>Boton</button>
      {console.log(showCaja)} */}
      <button onClick={restar} disabled={count == 0 ? "disabled" : ""}>-</button>
      <h1>{count}</h1>
      <button onClick={sumar} disabled={count == 10 ? "disabled" : ""}>+</button>
    </div>
  );
}

export default App;
