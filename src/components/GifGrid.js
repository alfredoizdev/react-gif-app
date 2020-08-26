import React from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <div>
      <h2>{category}</h2>
      {loading && <span className="card animate__animated animate__flash">Loading...</span>}
      <main className='main'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </main>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
