import React, { useState, useCallback} from 'react'

const Images = ({ className, img }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverEnter = useCallback(() => {
  setIsHovered(true)
    console.log(isHovered);
  },[isHovered])
  const handleHoverLeave = useCallback(() => {
  setIsHovered(false)
    console.log(isHovered);
  },[isHovered])


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
      {isHovered && (
        <>
          <i className="ri-heart-line favorite"></i>
          <i className="ri-add-circle-line cart"></i>
        </>
      )}
      
    </div>
  )
}

export default Images
