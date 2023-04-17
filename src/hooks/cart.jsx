import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [ cartItem, setCartItem ] = useState([]); //item = meal
  const [ orders, setOrders ] = useState([]);

  function handleAddItem(data, quantity, image) { //ver data
    try{
      const { id, title, price } = data;
      const order = {od, title, price, quantity }

      const itemIsAdded = cartItem.findIndex(cartItem => cart.id === item.id) //cartItem - Array.id   const orderIndex = cart.findIndex((userOrder) => userOrder.title === order.title);
    
    if (itemIsAdded !== -1 ) {
      var addItem = confirm("Item já adicionado no carrinho, comprar novamente?")
      if (!addItem) {
        return
      } 
        setCartItem( prevState => {
          const newState = [...prevState]
            quantity +=  newState[orderIndex].quantity
            totalPrice = newState[orderIndex].price
           return newState
        })
    } else {
        setCartItem(precState => [...precState, order])
      }
      alert(`${meals.title} foi adicionado no carrinho`)
    } catch (error){
      alert("Não foi possível adicionar o item ao carrinho!")
    }

  function handleRemoveItemFromCart(deleted) {
    setCartItem(prevState =>  prevState.filter(item => item.id !== deleted)) // i => i.id !== item.id
  }

  const total = cart.reduce((value, item) => {
    return value + item.price
  })

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:cart`, JSON.stringify(cart))
  }, [cart])

 return(
  <CartContext.Provider value={{
    cart,
    handleAddItem,
    handleRemoveItemFromCart,
    total,
    orders,
    setOrders
  }}>
    {children}
  </CartContext.Provider>
 )
}}

function useCart() {
  const context = useContext(CartContext)
  return context
}

export { CartProvider, useCart}
