import { Container, Content } from "./styles";
import { Input } from "../Input";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth"
import { useCart } from "../../hooks/cart";

import receiptIcon from "../../assets/Icons/Receipt.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import logout from "../../assets/Icons/Logout.svg"
import  brand from "../../assets/brand.png"


export function Header({ search }) {
  const { signOut } = useAuth();
  const { cart, orders } = useCart();
  const navigate = useNavigate();

  function exit() {
    signOut()
    navigate("/")
  }
 
  return(
    <Container>
      <Content>
        <div className="brand">
          <img src={brand} alt="Logo da empresa Food Explorer" />
        </div>        
    
          <Input            
            type="text"
            icon={HiMagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => search(e.target.value)}
          /> 
      
        <button 
          type="button"
          className="order"
          onClick={navigate("/order")}
        >
          <img src={receiptIcon} alt="" /> 
          <h3>Pedidos</h3>
          <span>{cart.length}</span>
        </button>

      <button className="logout" onClick={exit}>
        <img src={logout} alt="Botão de sair"/>
      </button>       

      </Content>
    </Container>
  )
};