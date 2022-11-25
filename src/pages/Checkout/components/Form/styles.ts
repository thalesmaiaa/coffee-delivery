import styled from 'styled-components'

export const Form = styled.form``

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: baseline;
    /* gap: 0.75rem; */
  }

  p {
    color: ${(props) => props.theme.purpleDark};
  }

  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const FlexInputContainer = styled.div`
  display: flex;
  flex: 1;
`

export const OptionalInput = styled(FlexInputContainer)`
  position: relative;

  &::after {
    content: attr(data-required);
    font-size: 0.75rem;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    color: ${(props) => props.theme.baseLabel};
    position: absolute;
    top: 25%;
    right: 5%;
  }
`

export const BaseInput = styled.input`
  width: 12.5rem;
  border: 0;
  border-radius: 4px;

  background: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseButton};

  padding: 0.75rem;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme.baseText};
  line-height: 1.3;

  margin-bottom: 0.25rem;

  &:focus {
    border: 1px solid ${(props) => props.theme.yellowDark};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const FlexDiv = styled.div`
  flex: 1;
`
export const FlexInput = styled(BaseInput)`
  flex: 1;
  width: 100%;
`

export const FullWidthInput = styled(BaseInput)`
  width: 100%;
`
export const SmallInput = styled(BaseInput)`
  width: 3.75rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
