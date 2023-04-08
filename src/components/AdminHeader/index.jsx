import { Container, Content } from "./styles";

import { Input } from "../Input";
import { Button } from "../Button";

import brand from "../../assets/brand.png"
import logout from "../../assets/Icons/Logout.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import receiptIcon from "../../assets/Icons/Receipt.svg"

export function AdminHeader() {
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
          className="newMeal"
        >
          Novo prato
        </Button> 

        <button
          className="logout"
        >
          <img src={logout} alt="" />
        </button>     
      </Content>    
    </Container>
  )
};