import { Container } from "./styles";

export function Input({ icon: Icon, event, title, ...rest }) {
  return (
    <Container  {...rest}>
      {Icon && <Icon size={24} />}
      <input id={event}/>      
    </Container>
  )
}