import { Container } from "./styles";
import { AdminBrand } from "../Admin_Brand";
import { Input } from "../Input";
import { Button } from "../Button";
import logout from "../../assets/Icons/Logout.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import receiptIcon from "../../assets/Icons/Receipt.svg"

export function AdminHeader() {
  return(
    <Container>
        <AdminBrand/>
        <Input
          icon={HiMagnifyingGlass}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
        
      <Button
         type="button"
      >
        Novo prato
      </Button>        
      
      <img src={logout} alt="" />
    </Container>
  )
};