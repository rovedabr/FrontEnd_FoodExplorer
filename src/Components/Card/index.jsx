import { Container } from "./styles";

export function Card({ title, icon, img, children, ...rest }) {
  return (
    <Container
      {...rest} 
      >
{/*         <input
          type="checkbox"          
        >
        </input> */}
      {img}
      <h2>{title}</h2>
      {children}
    </Container>

  )

}