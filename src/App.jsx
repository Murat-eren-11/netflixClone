import React from "react";
import Categorie from "./components/categorie";
import films from "./assets/movies_rnexgr.json";
import "./App.css";

function App() {
  const categories = Object.keys(films);

  return (
    <div className="App">
      <img className="logo" src="../public/logo-a79c3484.png" />
      {categories.map((categoryName) => (
        <Categorie
          category={films[categoryName]}
          key={`categorie-${categoryName}`}
        />
      ))}
    </div>
  );
}

export default App;
