import { Container, Form } from "./styles";
import { Brand } from "../Brand";

import menuIcon from "../../assets/Icons/menu.svg"
import closeIcon from "../../assets/Icons/close.svg"
import receiptIcon from "../../assets/Icons/Receipt.svg"
import findIcon from "../../assets/Icons/Find.svg"

import { useNavigate, Link } from "react-router-dom";

import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";

import { useState } from "react";

export function Navbar({ search }) {

  const navigate = useNavigate()
  const { cart, orders } = useCart();
  const { signOut, user } = useAuth();

  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true) 

  const [ popoverOpen,  setPopoverOpen] = useState(false)

  function menu() {
    return navigate("/menu")
  }

  function closePopover () {
    setPopoverOpen(false)
  }

  function openPopover () {
    setPopoverOpen(true)
  }


  return(    
    <Container>
      <Form> 
        <input 
          type="image" 
          src={menuIcon} 
          alt="Ícone do Menu do aplicativo"
          onClick={() => openPopover()} 
        /> 
        { popoverOpen ?
          <div className="menu">
              <div>
                <input 
                  type="image" 
                  src={closeIcon} 
                  alt="Ícone para fechar o popover"  
                  onClick={() => closePopover()}                
                />
                <h1>Menu</h1>
              </div>

              <div className="search">
                <img
                  id="search" 
                  src={findIcon} 
                  alt="ícone de lupa"                 
                />
                <input 
                  type="search" 
                  name="search" 
                  id="search" 
                  placeholder="Busque por pratos ou ingredientes"  
                  onChange={e => search(e.target.value)}              
                />
              </div>
              {
                isAdmin === 1 ? 
                <Link
                  type="button"
                  title="Novo Prato"
                  onClick={navigate("/addmeal")}
                >Novo Prato</Link> 
                : <div></div>
              }          
              <Link
                type="button"
                title="Sair"
                onClick={signOut}
              >Sair</Link>   
            </div>
          : null }
        <Brand/>
        <div className="receipt">
          <input 
            type="image" 
            src={receiptIcon} 
            alt="Ícone do recibo da compra" 
            onClick={() => navigate("/order")}           
          />
          <span>{cart.length}</span>
        </div>
      </Form>      
    </Container>
  )
}