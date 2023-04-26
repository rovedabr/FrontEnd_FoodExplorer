import { Container } from "./styles";

export function InputLabel({ name, label, value, placeholder, ...rest}) {
  return(
    <Container {...rest}>
        <label htmlFor={name}>{label}</label>
        <input 
          type="text" 
          id={name} 
          placeholder={placeholder} 
          value={value}        
        />
    </Container>
  )
}