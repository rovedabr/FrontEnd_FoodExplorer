import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const CartContext = createContext({}); //https://youtu.be/jo-IV8i5Gdk   https://www.youtube.com/watch?v=tczhRdyj1nM

function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]); //item = meal
  const [orders, setOrders] = useState([])
  
  function handleAddMealCart( meals, quantity, image) { 
    const  { id, title, price }  = meals
    const order = { id, title, price, quantity, image }

    const carrinho = setCart(prevState => [...prevState, order])
    // console.log(carrinho)
  }

  function handleRemoveMealFromCart(deleted) {
    const filteredCart = cart.filter(cartItem => cart.indexOf(cartItem !== deleted)
    ) // i => i.id !== item.id
    setCart(filteredCart)
  }

  function clearCart() {
    localStorage.removeItem(`@foodexplorer:cart`)
    setCart([])
  }


  useEffect(() => {
    localStorage.setItem(`@foodexplorer:cart`, JSON.stringify(cart))
  }, [cart])
  
 return(
  <CartContext.Provider value={{
    cart,
    handleAddMealCart,
    handleRemoveMealFromCart,
    clearCart,
  }}>
    {children}
  </CartContext.Provider>
 )
}

function useCart() {
  const context = useContext(CartContext)
  return context
}

export { CartProvider, useCart}
