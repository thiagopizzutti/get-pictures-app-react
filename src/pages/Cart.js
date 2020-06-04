import React, { useContext } from "react";
import { Context } from '../Context'
import  CartItem  from '../components/CartItem'

function Cart() {
  const { cartItems, calculateTotalCost } = useContext(Context)
  const cartItemElem = cartItems.map(item => <CartItem key={item.id} item={item} />
    
  )
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElem}
      <p className="total-cost">Total:{calculateTotalCost()} </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
    </main>
  );
}

export default Cart;