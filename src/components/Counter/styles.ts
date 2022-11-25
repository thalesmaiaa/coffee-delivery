import styled from 'styled-components'

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InputArea = styled(FlexCenter)`
  width: 4.5rem;
  background: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  padding: 0.5rem;

  gap: 0.25rem;

  cursor: pointer;

  p {
    width: 1.25rem;
    font-family: 'Robot', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.baseTitle};
    text-align: center;
  }

  svg {
    fill: ${(props) => props.theme.purple};
  }
`
