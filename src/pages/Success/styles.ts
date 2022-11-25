import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const Headers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme.yellowDark};
    font-size: 2rem;
    font-family: 'Baloo 2', monospace;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
  }

  @media screen and (max-width: 768px) {
  }
`

export const Content = styled.div`
  display: flex;
  gap: 6.375rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex: 1;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  padding: 2.5rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme.baseText};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;

  span {
    font-weight: 700;
  }
`

export const MapPinIcon = styled(MapPin)`
  border-radius: 50%;
  padding: 0.5rem;
  fill: ${(props) => props.theme.white};
  background: ${(props) => props.theme.purple};
`

export const TimerIcon = styled(Timer)`
  border-radius: 50%;
  padding: 0.5rem;
  fill: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
`

export const DollarIcon = styled(CurrencyDollar)`
  border-radius: 50%;
  padding: 0.5rem;
  fill: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellowDark};
`

export const Image = styled.img`
  width: 38.4rem;
  height: 18.3125rem;

  @media screen and (max-width: 768px) {
    width: 19.2rem;
    height: 9rem;
  }
`
