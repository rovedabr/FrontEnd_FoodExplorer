import { Container } from "./styles";

export function ButtonUpload({ label, title, input, value, fileImage, icon:Icon, ...rest}) {
  return(
    <Container {...rest}>
        <label htmlFor={fileImage}>
          <p>{label}</p>
            <div>
              {Icon && <Icon size={24}/>}{title}
              <input 
                type="file" 
                name="teste"
                id={fileImage} 
                value={value}
              />    
            </div>
          </label>        
    </Container>
  )
}