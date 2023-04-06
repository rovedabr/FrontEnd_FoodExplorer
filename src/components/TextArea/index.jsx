import { Container } from "./styles";

export function TextArea({ value, ...rest}) {
  return (
    <Container
      {...rest}
      rows="100"
      >
      {value}
    </Container>
  )
}