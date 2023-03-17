import { Container } from "./styles";

export function Input({ icon: Icon, eventname: eventName, title, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={24} />}
      <input id={eventName} {...rest}/>      
    </Container>
  )
}