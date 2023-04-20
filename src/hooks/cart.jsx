import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const CartContext = createContext({}); //https://youtu.be/jo-IV8i5Gdk   https://www.youtube.com/watch?v=tczhRdyj1nM

function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]); 
  const [ orders, setOrders ] = useState([])
  const [ items, setItems ] = useState([]);
  const [ total, setTotal ] = useState(0);
  
  function handleAddMealCart( meal, quantity, image) { 
    const  { id, title, price }  = meal
    var itemIdAlreadyAdded = [];
    image = meal.image

    const order = { id, title, price, quantity, image }
    const newItems = [...items, order]
    console.log(newItems)
    const itemsId = newItems.map(index => index.id) 
    const data = newItems.map(e )
    console.log(itemsId)

    var itemsOnlyDifferentId = itemsId.filter(function(e, i) {
        if(itemsId.indexOf(e) !== i) {
          itemIdAlreadyAdded.push(e)
        }
        return itemsId.indexOf(e) == i;
    })

    const alreadyAdded = (itemsId.length === itemsOnlyDifferentId.length)
    if (!alreadyAdded) {
      var itemAlreadyAdd = confirm("Deseja adicionar novamente o item ao carrinho?")
      if( itemAlreadyAdd === true) {

        setCart(prevState => {
          const newState = [...newItems]
          newState[itemsId].quantity = quantity
          newState[itemsId].price = price
          return newState
          console.log(newState)
        })
      } else {
        setCart(prevState => [...prevState, order])
        console.log(setCart)
      }
    }
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
