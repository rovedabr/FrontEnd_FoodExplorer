import { Container, Form } from "./styles";
import { AdminBrand } from "../AdminBrand";
import menuIcon from "../../assets/Icons/menu.svg"
import receiptIcon from "../../assets/Icons/Receipt.svg"

export function AdminNavbar({ img, ...rest }) {
  return(    
    <Container>
      <Form>
        <img src={menuIcon} alt="Ícone do Menu do aplicativo" />   
        <AdminBrand/>
        <div className="receipt">
          <img src={receiptIcon} alt="Ícone do recibo da compra" />
          <span>0</span>
        </div>
      </Form>      
    </Container>
  )
}