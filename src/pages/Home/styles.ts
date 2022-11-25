import styled from 'styled-components'

export const MainContainer = styled.main`
  margin-top: 4rem;
  h3 {
    font-family: 'Baloo 2', monospace;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme.baseSubtitle};
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`
export const Cards = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`
