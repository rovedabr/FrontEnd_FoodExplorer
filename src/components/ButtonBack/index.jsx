import { Container } from "./styles";
import careLeft from "../../assets/Icons/CaretLeft.svg"

export function ButtonBack({title, onClick, icon:Icon, ...rest}) {
  return (
    <Container
      onClick={onClick}
      icon={Icon && <Icon size={24} />}
      {...rest}
    >
      <img src={careLeft} alt="" />
      <span>{title}</span>
    </Container>
  )
}