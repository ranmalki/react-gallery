import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [albums, setAlbums] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => setAlbums(data))
  }, [])

  const selectAlbum = (event) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${event.target.selectedIndex}`)
      .then(res => res.json())
      .then(data => setItems(data))
  }

  return (
    <div className="App">
      <h1>Select an album:</h1>
      <select name="albums" id="albums" onChange={selectAlbum}>
        {albums.map((album, index) => <option value={album.id} key={index}>{album.title}</option>)}
      </select>
      <br />
      <br />
      {items.map((item, index) => <img key={index} src={item.thumbnailUrl} alt={item.title} />)}
    </div>
  );
}

export default App;