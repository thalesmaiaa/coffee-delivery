import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

const BaseButton = styled.button`
  line-height: 1.3;
  border: 0;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const LocationButton = styled(BaseButton)`
  color: ${(props) => props.theme.purpleDark};
  background: ${(props) => props.theme.purpleLight};

  gap: 0.25rem;

  width: 8.9375rem;
  height: 2.375rem;

  font-size: 0.875rem;
  font-weight: 400;

  svg {
    fill: ${(props) => props.theme.purple};
  }
`
export const IconButton = styled(BaseButton)`
  background: ${(props) => props.theme.yellowLight};

  width: 2.375rem;
  height: 2.375rem;

  position: relative;

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    text-decoration: none;

    width: 1.25rem;
    height: 1.25rem;

    background: ${(props) => props.theme.yellowDark};
    color: ${(props) => props.theme.white};

    border-radius: 50%;

    font-size: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
    line-height: 1.3;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    fill: ${(props) => props.theme.yellowDark};
  }
`
