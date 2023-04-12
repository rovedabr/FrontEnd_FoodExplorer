import { Container, Content } from "./styles";

export function Card({ title, icon: Icon, input, img,image, children, ...rest }) {
  return (
    <Container
       {...rest} 
      > 
          <div className="cardIcon">
            {input}
          </div>
          {Icon && <Icon size={24} />}        
        <Content
        >          
          {img}
          <h2>{title}</h2>
          {children}
        </Content> 
    </Container>

  )

}

