import { Container } from "./styles";

export function Card({ title, icon: Icon, input, img, children, ...rest }) {
  return (
    <Container
      {...rest} 
      >          
          {input}
          {img}
          <h2>{title}</h2>
          {children}
    </Container>

  )

}