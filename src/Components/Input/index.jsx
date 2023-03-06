import { Container } from "./styles";

export function Input({ icon:Icon, title, ...rest }) {
  return (
    <Container>
      {title}
      {Icon}
      <input {...rest}/>      
    </Container>
  )
}