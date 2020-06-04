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
  const [isOrdered, setIsOrder] = useState(false);
  

      const handleCartItems = (img) => {
             
          setCartItems(prev => [...prev, img])
        
      }
  
    const handleRemoveItem = (img) => {
      setCartItems(prev => prev.filter(item => item.id !== img.id))
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
  
  const calculateTotalCost = () => {
    return (cartItems.length * 5.99).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  const placeOrder = () => {
    setIsOrder(true)
    setTimeout(() => {
      console.log('PlaceOrder');
  
      
      setCartItems([])
      setIsOrder(false)
    }, 2000);
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
          cartItems,
          handleRemoveItem,
          calculateTotalCost,
          placeOrder,
          isOrdered
          
        }
      } > {
        children
      } </Context.Provider>);
    }
    export {
      ContextProvider,
      Context
    };