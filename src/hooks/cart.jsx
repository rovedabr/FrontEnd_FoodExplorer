import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const CartContext = createContext({}); //https://youtu.be/jo-IV8i5Gdk   https://www.youtube.com/watch?v=tczhRdyj1nM

function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]); //item = meal

  function handleAddMealCart(id, title, image, price, quantity ) { //ver data
    // const data = { id, title, price, quantity };
    const newCart = [...cart]
    const item = newCart.find(meal => meal.id === id)

    // setCart([...cart, data])
    // console.log(data)

    // const item = newMealsCart.find((meal) => meal.id === id)

    // if (!item) {
    //   newMealsCart.push({ id: id, quantity: 1})
    // } else {
    //   item.quantity = item.quantity + 1
    // }
    // setMealsCart(newMealsCart)
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
