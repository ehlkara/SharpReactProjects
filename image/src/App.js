import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImgaes] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImgaes(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images}/>
    </div>
  );
}

export default App;
