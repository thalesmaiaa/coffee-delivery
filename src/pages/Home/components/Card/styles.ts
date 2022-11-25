import styled from 'styled-components'

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled(FlexCenter)`
  margin-top: 3.375rem;
  padding: 0 1.25rem;

  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px;

  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`

export const ProductImage = styled.div`
  margin-top: -1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const Tags = styled(FlexCenter)`
  justify-content: space-evenly;

  gap: 0.25rem;
`

export const Tag = styled.div`
  flex: 1;

  border-radius: 100px;

  background: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};

  padding: 0.25rem 0.5rem;
  margin: 1rem 0 1.25rem;

  font-size: 0.625rem;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.3;
`
export const Description = styled(FlexCenter)`
  flex-direction: column;
  gap: 0.5rem;

  line-height: 1.3;

  margin-bottom: 2.0625rem;

  span {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Baloo 2', monospace;
    font-weight: 700;
    font-size: 1.25rem;
  }

  p {
    color: ${(props) => props.theme.baseLabel};
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-align: center;
  }
`
export const Buy = styled.div`
  width: 13rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  flex-direction: row;

  gap: 1.4375rem;
`

export const Value = styled(FlexCenter)`
  flex-direction: row;
  gap: 0.5rem;

  width: 4.1875rem;
  height: 1.9375rem;

  color: ${(props) => props.theme.baseText};

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
  }

  span {
    font-family: 'Baloo 2', monospace;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
  }
`
export const Counter = styled(FlexCenter)`
  width: 7.375rem;
  height: 2.375rem;

  gap: 0.5rem;
`

export const IconButton = styled.button`
  cursor: pointer;

  border: 0;
  background: ${(props) => props.theme.purpleDark};
  border-radius: 6px;
  padding: 0.5rem;

  width: 2.375rem;
  height: 2.375rem;

  svg {
    fill: ${(props) => props.theme.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
