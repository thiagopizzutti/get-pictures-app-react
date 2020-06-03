import React, { useState, useContext, useCallback } from 'react'
import { Context } from '../Context'
import PropTypes from 'prop-types'

const Images = ({ className, img }) => {
  
  Image.PropTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool,
    })

  } 
  

  const [isHovered, setIsHovered] = useState(false)
  
  const { toggleFavorite, handleCartItems, cartItems, handleRemoveItem } = useContext(Context)
  
  const handleHoverEnter = useCallback(() => {
  setIsHovered(true)
    
  },[])
  const handleHoverLeave = useCallback(() => {
  setIsHovered(false)
   
  },[])

 
  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  };

  const cartIcon = () => {
    
    const alreadyInCart = cartItems.some(item => item.id ===img.id)
    
    if (alreadyInCart) {
      return <i
        onClick={() => handleRemoveItem(img)}
        className="ri-add-circle-fill cart"></i>;
    } else if (isHovered) {
      return (
        <i onClick={() => handleCartItems(img)} className="ri-add-circle-line cart"></i>
      );
    }
  };
  
  return (
    <div
      
      className={`${className} image-container`}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <img
        src={img.url}
        alt='images'
        className="image-grid" />
        {heartIcon()}
        {cartIcon()}
        
       
        
      
    </div>
  )
}

export default Images
