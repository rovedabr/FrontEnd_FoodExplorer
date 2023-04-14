import { Container, Content } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import { Input } from "../Input";
import { Button } from "../Button";

import brand from "../../assets/brand.png"
import logout from "../../assets/Icons/Logout.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import receiptIcon from "../../assets/Icons/Receipt.svg"


export function AdminHeader() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function addNewMeal() {
    return navigate("/addmeal")
  }

  function exit() {
    signOut()
    navigate("/")
  }

  return(
    <Container>
      <Content>        
        <div className="brand">
          <img src={brand} alt="" />
          <span>admin</span>
        </div>

        <Input
          icon={HiMagnifyingGlass}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
          
        <Button
          title="Novo prato"
          type="button"
          className="addMeal"
          onClick={addNewMeal}
        >
          Novo prato
        </Button> 
        <button 
          className="logout"
          onClick={exit} >
            <img src={logout} alt="Botão sair" />
          </button>     
      </Content>    
    </Container>
  )
};