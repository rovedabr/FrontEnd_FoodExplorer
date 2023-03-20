import { Container } from "./styles";

export function Input({ icon: Icon, event, title, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={24} />}
      <input id={event} {...rest}/>      
    </Container>
  )
}