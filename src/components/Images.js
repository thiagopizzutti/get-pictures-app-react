import React, { useState, useContext, useCallback } from 'react'
import { Context } from '../Context'

const Images = ({ className, img }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const { toggleFavorite } = useContext(Context)
  
  const handleHoverEnter = useCallback(() => {
  setIsHovered(true)
    
  },[])
  const handleHoverLeave = useCallback(() => {
  setIsHovered(false)
   
  },[])


  return (
    < div className = {
      `${className} image-container`
    }
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <img
        src={img.url}
        alt='images'
        className="image-grid"
        
      />
      {isHovered && (
        <>
          <i
            className="ri-heart-line favorite"
            onClick={() => toggleFavorite(img.id)}
          
          ></i>
          <i
            className="ri-add-circle-line cart"
            
          >
            
            </i>
        </>
      )}
      
    </div>
  )
}

export default Images
