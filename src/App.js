import React , {useState,useEffect} from 'react';
import './App.css';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,Nav,Navbar} from "reactstrap";
import { Button } from '@material-ui/core';

function App() {
  const[input,setInput] = useState('');
  const[images,setImages] = useState([]); 
  const handleChange =async(e)=>{
    e.preventDefault();
    const url = `https://api.unsplash.com/search/photos?query=${input}&client_id=JvlztJ6zbqCHz4fbZMQIMwyu5TZnDPcudNbZgDoanxI`;
    const response = await fetch(url)
    const data = await response.json();
    setImages(data.results);
    console.log(data.results)
  }
  return (
    <div className="app">
      <div className="app__header">
        <h4 className="title">Wallpaper Generator</h4>
      </div>
      <form onSubmit={handleChange}>
        <div className="app__search">
          <input
          placeholder ="Search here...."
          value={input}
          onChange={(e)=>setInput(e.target.value)} 
          className="app__search-input"
          type="text" />
          <Button 
          type="submit" 
          className="app__search-button"
          >Search</Button>
        </div>
      </form>
      <p><h4 style={{color:'red'}}>Hint :</h4>You can download the picture by clicking on it....</p>
        <div className="container">
            {images.map(image=>(
              <Card key={image.id} className="card">
                <CardImg className="cardImage" src={image.urls.regular}/>
                <CardBody>
                  <CardTitle>{image.alt_description}</CardTitle>
                  <CardSubtitle>{image.likes} 👍</CardSubtitle>
                </CardBody>
              </Card>
        ))}
      </div>
    </div>
  );
}
export default App;
