import { Container } from "./styles";

export function Card({ title, icon: Icon, input, img, children, ...rest }) {
  return (
    <Container
      {...rest} 
      >          
         <div id="card"> 
          {input}
          {img}
          <h2>{title}{img}</h2>
          {children}
        </div>    
    </Container>

  )

}