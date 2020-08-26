import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) => {
  useEffect(() => {
    getGifs(category).then(img => setState({
        data: img,
        loading: false
    }));
  }, [category]);

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  return state;
};

export default useFetchGifs;
