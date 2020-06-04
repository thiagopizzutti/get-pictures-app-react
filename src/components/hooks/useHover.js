import { useState, useEffect, useRef } from 'react'

const useHover = () => {

  const [isHovered, setIsHoveres] = useState(false)
  const iconRef = useRef(null)

const handleHoverEnter = () => {
  setIsHoveres(true);
};

const handleHoverLeave = () => {
  setIsHoveres(false);
};

  useEffect(() => {
    iconRef.current.addEventListener('mouseenter', handleHoverEnter)
    iconRef.current.addEventListener('mouseleave', handleHoverLeave)
    return () => {
      iconRef.current.removeEventListener('mouseenter', handleHoverEnter);
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      iconRef.current.removeEventListener('mouseleave', handleHoverLeave);
    }
  }, [])

  return [isHovered, iconRef]

}

export default useHover