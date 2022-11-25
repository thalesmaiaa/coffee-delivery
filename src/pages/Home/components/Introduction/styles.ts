import styled from 'styled-components'

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.875rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;

    img {
      width: 14.875rem;
      height: 11.25rem;
    }

    div {
      width: 100%;
      height: 100%;
    }
  }
`

export const TitleContainer = styled.div`
  width: 36.75rem;
  height: 12rem;

  h1 {
    font-family: 'Baloo 2', monospace;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.baseTitle};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme.baseSubtitle};
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;

    h1 {
      font-size: 1.5rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      text-align: center;
    }
  }
`

export const ItemsContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 18.375rem 18.375rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme.baseText};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    margin-bottom: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.5rem;
  }
`

const IconButton = styled.button`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CartButton = styled(IconButton)`
  background: ${(props) => props.theme.yellowDark};
  svg {
    fill: ${(props) => props.theme.white};
  }
`

export const PackageButton = styled(IconButton)`
  background: ${(props) => props.theme.baseText};
  svg {
    fill: ${(props) => props.theme.white};
  }
`

export const TimerButton = styled(IconButton)`
  background: ${(props) => props.theme.yellow};
  svg {
    fill: ${(props) => props.theme.white};
  }
`

export const CoffeeButton = styled(IconButton)`
  background: ${(props) => props.theme.purple};
  svg {
    fill: ${(props) => props.theme.white};
  }
`
