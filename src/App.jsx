import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./json/quotes.json"
import color from "./utils/color"


function App() {

  //esta funcion calcula un indice random
  const getIndexRandom = arr => {
    return Math.floor(Math.random() * arr.length)
  }

  //aqui se extrae el elemento segun el indice random
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }

  //esta funcion calcula el quote y el color random
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObject} className="App">
      <div>
        <QuoteBox
          randomQuote={randomQuote}
          randomColor={randomColor}
          getRandomAll={getRandomAll}
        />
      </div>
    </div>
  )
}

export default App
