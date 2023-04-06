import { Container } from "./styles";
import { AdminBrand } from "../AdminBrand";
import { Input } from "../Input";
import { Button } from "../Button";
import logout from "../../assets/Icons/Logout.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import receiptIcon from "../../assets/Icons/Receipt.svg"

export function AdminHeader() {
  return(
    <Container>
      <AdminBrand
        className="brand"
      />

      <Input
        icon={HiMagnifyingGlass}
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />
        
      <Button
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
      
      
    </Container>
  )
};