import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
      )
      .then((resp) => setAllPhotos(resp.data))

      .catch((err) => console.log(err));
  }, []);

  return <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
