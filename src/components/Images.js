import React from 'react'





const Images = ({className, img}) => {
  return (
    < div className = {
      `${className} image-container`
    }
    >
      <img src={img.url} alt='images' className="image-grid"/>
      
    </div>
  )
}

export default Images
