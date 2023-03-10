import { Container } from "./styles";

export function ButtonAdd({ img, ...rest}) {
  return(
    <Container
    type="button"
      {...rest}
    >
      {img}
      <button/>    
    </Container>
  )
}