import { Container, Content } from "./styles";

export function Card({ title, icon: Icon, img,image, children, ...rest }) {
  return (
    <Container
       {...rest} 
      > 
          {Icon && <Icon size={24} />}        
        <Content
        >          
          {img}
          {title}
          {children}
        </Content> 
    </Container>

  )

}

