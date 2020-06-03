import React, {
  createContext,
  useState,
  useEffect
} from 'react';
import axios from 'axios';
const Context = createContext();

const ContextProvider = ({children}) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

      const handleCartItems = (img) => {
             
          setCartItems(prev => [...prev, img])
        
      }
      const toggleFavorite = (id) => {
      const isFavoritePhoto = allPhotos.map(favorite => {

        if (favorite.id === id) {
          return {
            ...favorite,
            isFavorite: !favorite.isFavorite
          }
        }
        return favorite
      })

      setAllPhotos(isFavoritePhoto)

    }
  
    useEffect(() => {
      axios
        .get(
          'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
        )
        .then((resp) => setAllPhotos(resp.data))

        .catch((err) => console.log(err));
    }, []);

    return ( <Context.Provider value = {
        {
          allPhotos,
          toggleFavorite,
          handleCartItems,
          cartItems
          
        }
      } > {
        children
      } </Context.Provider>);
    }
    export {
      ContextProvider,
      Context
    };