import { Container } from "./styles";

export function Card({ title, icon: Icon, input, img, children, ...rest }) {
  return (
    <Container
      {...rest} 
      >
        {Icon}
        <>
          <div id="icon">{input}</div>
          {img}
          <h2>{title}</h2>
          {children}
        </div>

    </Container>

  )

}