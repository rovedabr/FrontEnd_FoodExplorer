import { Container } from "./styles";

export function ButtonUpload({ label, title, icon:Icon, ...rest}) {
  return(
    <Container {...rest}>
        <label htmlFor={fileImage}>{label}</label>        
        <button type="file" id={fileImage}>{Icon && <Icon size={24}/>}{title}</button>
    </Container>
  )
}