import React , {useState,useEffect} from 'react';
import './App.css';
import ImageItem from './ImageItem';
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
     <h1 className="title">Wallpaper Generator</h1>
     <h4 className="mouli">by Mouli..❤</h4>
     </div>
     <form onSubmit={handleChange}>
     <div className="app__search">
       <input
       placeholder ="Search here...."
       value={input}
       onChange={(e)=>setInput(e.target.value)} 
       className="app__search-input"
       type="text" />
       <button 
       type="submit" 
       className="app__search-button"
       >Search</button>
     </div>
     </form>
     <p><h4 style={{color:'red'}}>Hint :</h4>You can download the picture by clicking on it....</p>
     <div className="app__content">
       {images.map(image=>(
         <ImageItem 
         key={image.id}
         description = {image.alt_description}
         likes ={image.likes}
         image_src = {image.urls.regular}
         link ={image.links.download}
         />
       ))}
     </div> 
    </div>
  );
}
export default App;
