import React, { useState, useCallback} from 'react'

const Images = ({ className, img }) => {
  const [isHovered, setIsHovered] = useState(false)

  console.log(isHovered);

  const handleHoverEnter = () => {
  setIsHovered(true)
  }
  const handleHoverLeave = () => {
  setIsHovered(false)

  }


  return (
    < div className = {
      `${className} image-container`
    }
    >
      <img
        src={img.url}
        alt='images'
        className="image-grid"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      />
      
    </div>
  )
}

export default Images
