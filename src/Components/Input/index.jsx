import { Container } from "./styles";

export function Input({ icon, title, ...rest }) {
  return (
    <Container>
      {icon}
      {title}
      <input {...rest}/>      
    </Container>
  )
}