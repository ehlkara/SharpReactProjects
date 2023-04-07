import "./App.css";
import SerachHeader from "./SearchHeader";
import searchImages from "./api";

function App() {
  const handleSubmit = (term) => {
    console.log(term);
    searchImages(term);
  };

  return (
    <div className="App">
      <SerachHeader search={handleSubmit} />
    </div>
  );
}

export default App;
