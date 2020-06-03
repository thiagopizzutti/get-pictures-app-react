import React, { useState, useContext, useCallback } from 'react'
import { Context } from '../Context'
import PropTypes from 'prop-types'

const Images = ({ className, img }) => {
  
  Image.PropTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
      isFavorite: PropTypes.bool,
    })

  } 
  
  
  
  
  const [isHovered, setIsHovered] = useState(false)
  
  const { toggleFavorite } = useContext(Context)
  
  const handleHoverEnter = useCallback(() => {
  setIsHovered(true)
    
  },[])
  const handleHoverLeave = useCallback(() => {
  setIsHovered(false)
   
  },[])

  const heartIcon = isHovered && !img.isFavorite &&(
    <i
      className = "ri-heart-line favorite"
      onClick = {
          () => toggleFavorite(img.id)
        }
    >
  </i>)

  const heartIsFilled = isHovered && img.isFavorite &&(
  <i
  className = "ri-heart-fill favorite"
  onClick = {
      () => toggleFavorite(img.id)
    } >
    </i>)

  const cartIcon = isHovered && < i className="ri-add-circle-line cart" >
  </i>;

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
        {heartIcon}
        {heartIsFilled}
        {cartIcon}
        
      
    </div>
  )
}

export default Images
