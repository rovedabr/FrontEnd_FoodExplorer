import { Container } from "./styles";

export function Card({ title, icon, img, children, ...rest }) {
  return (
    <Container
      {...rest} 
      >
        <div>
          {img}
          <h2>{title}</h2>
          {children}
        </div>

    </Container>

  )

}