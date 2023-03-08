import { Container } from "./styles";

export function Input({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={24} />}
      {title}
      <input {...rest}/>      
    </Container>
  )
}