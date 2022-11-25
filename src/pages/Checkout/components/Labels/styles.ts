import styled from 'styled-components'

const BaseTitle = styled.p`
  font-style: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
`

export const Title = styled(BaseTitle)`
  color: ${(props) => props.theme.baseSubtitle};
`

export const Subtitle = styled(BaseTitle)`
  font-size: 0.875rem;
  color: ${(props) => props.theme.baseText};

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`
