import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const CartContext = createContext({}); //https://youtu.be/jo-IV8i5Gdk   https://www.youtube.com/watch?v=tczhRdyj1nM

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
    
    const orderIndex = cart.findIndex((userOrder) => userOrder.title === order.title);
    if (orderIndex !== -1) {
        const itemAlreadyAdded = confirm("Este item já foi adicionado ao carrinho, deseja adicionar novamente?")
        if (!itemAlreadyAdded) {
            return
        } else {
          setCart(prevState => {
              const prevState = [...prevState, order]
              prevState[orderIndex].quantity += quantity;
              prevState[orderIndex].price = Math.round((newState[orderIndex].price + priceFormatted) * 100) / 100;
              return setItem;
          });
        }
    } else {
        setCart(prevState => [...prevState, order]);
    }
    alert("O item adicionado ao carrinho");
    console.log(cart)
    console.log(setCart)

    
    // try {
      // const  { id, title, price }  = meal
      // const priceFormatted = quantity * Number(price.replace(",","."))
      // image = meal.image
      // const order = { id, title, price: priceFormatted, quantity, image }

      // const newItem = [...item, order]

      // const itemTitle = newItem.map(item => item.title)[0] 
      // console.log(itemTitle)
      // console.log(order.title)

      // const orderIndex = cart.find(title => itemTitle === order.title)
      // console.log(orderIndex)
      // if (orderIndex === -1) {
      //   setCart(prevState => {
      //     const newState = [...prevState, order]
      //     console.log(newState)
      //   })
      // }

      

      // const itemAlreadyExist = items.find((i) => i.id === order.id)
      // console.log(itemAlreadyExist)

    

      // const orderExist = cart.some((userOrder) => userOrder.title === order.title)
      // console.log(orderExist)
      // if(orderExist) {
      //   var itemAlreadyAdd = confirm("Deseja adicionar novamente o item ao carrinho?")
      //   if( itemAlreadyAdd === true) {
      //     setCart(prevState => [...prevState, order])
      //     console.log(setCart)
      //   } else {
      //     alert("O item não foi adicionadp")
      //   }
      // }

    // } catch (error) {
    //   if (error.response) {
    //     alert(error.response.data.message)
    //   } else {
    //     alert("Não foi possível adicionar este item ao carrinho!")
    //   }
    // }


    
    // var itemIdAlreadyAdded = [];
  

    // const newItems = [...items, order]
    // console.log(newItems)
    // const itemsId = newItems.map(index => index.id) 
    // const data = newItems.map(e )
    // console.log(itemsId)

    // var itemsOnlyDifferentId = itemsId.filter(function(e, i) {
    //     if(itemsId.indexOf(e) !== i) {
    //       itemIdAlreadyAdded.push(e)
    //     }
    //     return itemsId.indexOf(e) == i;
    // })

    // const alreadyAdded = (itemsId.length === itemsOnlyDifferentId.length)
    // if (!alreadyAdded) {
    //   var itemAlreadyAdd = confirm("Deseja adicionar novamente o item ao carrinho?")
    //   if( itemAlreadyAdd === true) {

    //     setCart(prevState => {
    //       const newState = [...newItems]
    //       newState[itemsId].quantity = quantity
    //       newState[itemsId].price = price
    //       return newState
    //       console.log(newState)
    //     })
    //   } else {
    //     setCart(prevState => [...prevState, order])
    //     console.log(setCart)
    //   }
    // }
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
