import { Container, Form } from "./styles";
import { Brand } from "../Brand";
import menuIcon from "../../assets/Icons/menu.svg"
import closeIcon from "../../assets/Icons/close.svg"


import receiptIcon from "../../assets/Icons/Receipt.svg"
import findIcon from "../../assets/Icons/Find.svg"

import { useNavigate, Link } from "react-router-dom";

import { Input } from "../Input"
import { ButtonText } from "../ButtonText";


import { useCart } from "../../hooks/cart";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";


export function Navbar({ img, ...rest }) {
  const navigate = useNavigate()
  const { cart, orders } = useCart();
  const { user } = useAuth()

  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true) 

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  function menu() {
    return navigate("/menu")
  }


  return(    
    <Container>
      <Form> 
        <input 
          type="image" 
          src={menuIcon} 
          alt="Ícone do Menu do aplicativo"
          onClick={menu} 
        /> 
        <div className="menu">
            <div>
              <input type="image" src={closeIcon} alt="" 
              
              />
              <h1>Fechar</h1>
            </div>

            <div className="search">
              <img src={findIcon} alt="" />
              <input type="search" name="" id="" placeholder="Busque por pratos ou ingredientes"/>
            </div>

          {
            isAdmin === 1 ? 
            <Link
              type="button"
              title="Novo Prato"
              // onClick={navigate("/addmeal")}
            >Novo Prato</Link> 
            : <div></div>
          }
          
          <Link
            type="button"
            title="Sair"
            // onClick={signOut}
          />   
        </div>
        <Brand/>
        <div className="receipt">
          <input type="image" src={receiptIcon} alt="Ícone do recibo da compra" onClick={() => navigate("/order")} />
          <span>{cart.length}</span>
        </div>
      </Form>      
    </Container>
  )
}