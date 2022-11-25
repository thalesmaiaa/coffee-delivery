import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;

  margin-top: 2.5rem;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.p`
  font-family: 'Baloo 2', monospace;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;

  color: ${(props) => props.theme.baseSubtitle};

  margin-bottom: 1rem;
`

export const AddressContainer = styled(DefaultContainer)`
  width: 53rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const CardContainer = styled(DefaultContainer)`
  width: 37rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const CardBase = styled.div`
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px;
  padding: 2.5rem;
`

export const FormCard = styled(CardBase)`
  margin-bottom: 0.75rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`

const FormHeaders = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
`
export const FormTitleContainer = styled(FormHeaders)`
  svg {
    color: ${(props) => props.theme.yellowDark};
  }

  @media screen and (max-width: 768px) {
    svg {
      width: 3rem;
    }
  }
`
export const CardContent = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  flex-direction: column;

  img {
    width: 4rem;
    height: 4rem;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`

export const CardItem = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  /* flex: 1; */
  width: 100%;

  @media screen and (max-width: 768px) {
    gap: 0.75rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const CoffeeName = styled.p`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.3;

  color: ${(props) => props.theme.baseSubtitle};

  margin-bottom: 0.5rem;
`

export const Display = styled.div`
  display: flex;
  width: 100%;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  height: 2rem;

  button {
    width: 5.6875rem;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ButtonItem = styled.button`
  cursor: pointer;

  padding: 0 0.5rem;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: end;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.3;

  text-transform: uppercase;

  border: 1px solid transparent;
  &:hover {
    background: ${(props) => props.theme.baseHover};
  }

  p {
    height: 0.75rem;
  }
`

export const Price = styled.div`
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.3;

  color: ${(props) => props.theme.baseText};
`

export const Divider = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  border: 1px solid ${(props) => props.theme.baseButton};
`

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

export const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListItem = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  color: ${(props) => props.theme.baseText};
`

export const Total = styled(ListItem)`
  color: ${(props) => props.theme.baseSubtitle};
  font-weight: 700;
  font-size: 1.25rem;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  height: 3rem;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  border: 0;
  border-radius: 6px;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.yellowDark};
  }
`
