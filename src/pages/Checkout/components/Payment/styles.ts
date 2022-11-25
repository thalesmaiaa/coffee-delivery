import styled from 'styled-components'

const FormHeaders = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const PaymentsHeaders = styled(FormHeaders)`
  svg {
    color: ${(props) => props.theme.purple};
  }

  @media screen and (max-width: 768px) {
    svg {
      width: 3rem;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const Button = styled.button`
  cursor: pointer;

  flex: 1;
  border: 0;
  border-radius: 6px;
  padding: 1rem;
  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0.75rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.3;

  text-transform: uppercase;

  border: 1px solid transparent;

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }

  &:focus {
    background: ${(props) => props.theme.purpleLight};
    border: 1px solid ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
