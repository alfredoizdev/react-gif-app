import React, { useState } from "react";
import AddCategorie from "./components/AddCategorie";
import GifGrid from "./components/GifGrid";
import 'animate.css/animate.css';


const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch man"]);

  return (
    <div>
      <h2>Gif expert</h2>
      <AddCategorie setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((category) => (
          <li key={category} ><GifGrid category={category} /></li>
        ))}
      </ul>
    </div>
  );
};

export default GifExpertApp;
