import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const CartContext = createContext({}); 

function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]); 
  const [ orders, setOrders ] = useState([])
  const [ item, setItem ] = useState([]);
  const [ total, setTotal ] = useState(0);
  
  function handleAddMealCart( meal, quantity, image) { 

    const { id, title, price } = meal;
    const priceFormatted = quantity * Number(price.replace(',', '.'))
    image = meal.image

    const order = { id, title, price: priceFormatted, image, quantity };
      try {
        const orderIndex = cart.findIndex((userOrder) => userOrder.title === order.title);
        if (orderIndex !== -1) {
            const itemAlreadyAdded = confirm("Este item já foi adicionado ao carrinho, deseja adicionar novamente?")
            if (!itemAlreadyAdded) {
                return
            } else {
              setCart(prevState => {
                  const newItem = [...prevState, order]
                  newItem[orderIndex].quantity += quantity;
                  newItem[orderIndex].price = Math.round((newItem[orderIndex].price + priceFormatted) * 100) / 100;
                  return newItem;
              });
            }
        } else {
            setCart(prevState => [...prevState, order]);
        }
        alert("O item adicionado ao carrinho");
      }  catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível adicionar este item ao carrinho!")
        }
      }
  }

  function handleRemoveMealFromCart(deleted) {
    const filteredCart = cart.filter(cartItem => cart.indexOf(cartItem !== deleted))
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
