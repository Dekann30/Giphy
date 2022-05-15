import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const apiKey = 'EshHSad6GYrA4rRVq2H8y1voM2zAFcPO'
  const URL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g

`
  const [gif, setGif] = useState(null)
  const getGif = async () => {
    const data = await fetch(URL).then(res => res.json())
    setGif(data)
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
