import { Container, Content } from "./styles";

import { Input } from "../Input";
import { Brand } from "../Brand";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth"

import receiptIcon from "../../assets/Icons/Receipt.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import logout from "../../assets/Icons/Logout.svg"

export function Header({ search }) {
  const { user, signOut } = useAuth();
  const { cart, orders } = useCart();

  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true) 
  const user_id = user
  const navigate = useNavigate();

  function exit() {
    signOut()
    navigate("/")
  }

  function addNewMeal() {
    return navigate("/addmeal")
  }
 
  return(
    <Container>
      <Content>
        <Brand/>     
          <Input            
            type="text"
            icon={HiMagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => search(e.target.value)}
          /> 

          { isAdmin === 1 ? 
            <Button
              title="Novo prato"
              type="button"
              className="addMeal"
              onClick={addNewMeal}
            >Novo prato</Button> 
            :       
            <button 
              type="button"
              className="order"
              onClick={() => navigate("/order")}          
            >
              <img src={receiptIcon} alt="" /> 
              <h3>Pedidos</h3>
              <span>{cart.length}</span>
            </button>
          }

          <button 
            type="button"
            className="logout" 
            onClick={() => exit()}          
          >
            <img 
              src={logout} 
              alt="Botão de sair"            
            />
          </button>   
      </Content>
    </Container>
  )
};