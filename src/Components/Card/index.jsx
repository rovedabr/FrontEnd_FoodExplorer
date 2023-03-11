import { Container } from "./styles";

export function Card({ title, icon, img, children, ...rest }) {
  return (
    <Container
      {...rest} 
      >
        <button
          type="checkbox"
          icon={img}
        ></button> 
      {img}
      <h2>{title}</h2>
      {children}
    </Container>

  )

}