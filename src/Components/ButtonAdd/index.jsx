import { Container } from "./styles";

export function ButtonAdd({ icon: Icon, ...rest}) {
  return(
    <Container
    type="button"
      {...rest}
    >
      {Icon}
      <button/>    
    </Container>
  )
}