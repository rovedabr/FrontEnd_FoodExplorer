import { Container } from "./styles";

export function Section({ title, img, children, tag, ...rest }) {
  return (
    <Container
      {...rest}
    >
      {img}
      {title}
      {children}
      {tag}
    </Container>

  )

}