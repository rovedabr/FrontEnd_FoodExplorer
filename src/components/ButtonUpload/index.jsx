import { Container } from "./styles";

export function ButtonUpload({ fileImage, label, title, placeholder, icon:Icon, ...rest}) {
  return(
    <Container {...rest}>
        <label htmlFor={fileImage}>{label}</label>        
        <button type="file" id={fileImage}>{Icon && <Icon size={24}/>}{title}</button>
    </Container>
  )
}