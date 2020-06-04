import React, { useContext } from 'react'
import { Context } from '../Context'
import PropTypes from 'prop-types'
import useHover from './hooks/useHover'


function CartItem({ item }) {
  
  const { handleRemoveItem } = useContext(Context)
  
  const [isHovered, iconRef] = useHover()

  const trashClassName = isHovered
    ? "ri-delete-bin-fill"
    : "ri-delete-bin-line";
  
  return (
   
      <div className="cart-item">
      <i
        ref={iconRef}
        onClick={() => handleRemoveItem(item)}
        className={trashClassName}
      ></i>
      <img src={item.url} alt="img" width="130px" />
      <p>$5.99</p>
    </div>
   
  )
  
}
CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
