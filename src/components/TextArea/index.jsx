import { Container } from "./styles";

export function TextArea({ value, text, ...rest}) {
  return (
    <Container
      {...rest}
      rows="100"
      value={value}
      >
      {text}
    </Container>
  )
}