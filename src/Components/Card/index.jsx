import { Container } from "./styles";

export function Card({ title, img, children, ...rest }) {
  return (
    <Container
      {...rest}      
      >
      <button
        type="checkbox"
      />
      {img}
      <h2>{title}</h2>
      {children}
    </Container>

  )

}