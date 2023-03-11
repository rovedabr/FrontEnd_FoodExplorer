import { Container } from "./styles";

export function FavoriteButton({ ...rest}) {
  return(
    <Container>
      <div>
        <img src="../../assets/Icons/Heart.svg" alt="" />

      </div>
      <button>
      </button>
{/*       <input
        type="checkbox"
        src="../../assets/Icons/Heart.svg"
        {...rest}
        >
      </input> */}
    </Container>
  )
}