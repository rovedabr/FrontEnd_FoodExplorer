import { Container } from "./styles";
import { AdminBrand } from "../AdminBrand";
import menuIcon from "../../assets/Icons/menu.svg"

export function AdminNavbar({ icon, ...rest }) {
  return(
    <Container
      {...rest}
    >      
        <img src={menuIcon} alt="Ícone do Menu do aplicativo" />   
        <AdminBrand/>  
        <span></span>
        {icon}    
    </Container>
  )
}