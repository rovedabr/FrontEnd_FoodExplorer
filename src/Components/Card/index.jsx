import { Container, Content } from "./styles";

export function Card({ title, icon: Icon, input, img, children, ...rest }) {
  return (
    <Container
       {...rest} 
      >
          {input}
          {Icon && <Icon size={24} />}        
        <Content>
          {img}
          <h2>{title}</h2>
          {children}
        </Content> 
    </Container>

  )

}