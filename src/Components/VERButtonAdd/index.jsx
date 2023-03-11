import { Container } from "./styles";

export function ButtonAdd({ icon: Icon,  ...rest}) {
  return(
    <Container
    type="button"
    {...rest}
    >
      {Icon && <Icon size={27}/>}      
    </Container>
  )
}