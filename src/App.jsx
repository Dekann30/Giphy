import './App.css';
import {useState, useEffect} from 'react'
import Button from './components/Button';
import GifDisplay from './components/GifDisplay';

function App() {
  const apiKey = 'EshHSad6GYrA4rRVq2H8y1voM2zAFcPO'
  const URL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g

`
  const [gif, setGif] = useState(null)
  const getGif = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setGif(data.data)
    // console.log(data.data)
  }

  useEffect(()=>{getGif(URL)}, [])

  return (
    <div className="App">
      <Button getGif={getGif}/>
      <GifDisplay gif={gif} />
    </div>
  );
}

export default App;
