import coffeeLogo from '../../assets/coffee-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  ButtonContainer,
  IconButton,
  LocationButton,
  NavContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
export function Navbar() {
  const { stagedItems } = useContext(CoffeesContext)

  const hasCoffees = stagedItems > 0

  const redirectPath = hasCoffees ? '/checkout' : '/'

  return (
    <NavContainer>
      <NavLink to="/">
        <img src={coffeeLogo} alt="" />
      </NavLink>
      <ButtonContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <NavLink to={redirectPath}>
          <IconButton>
            {hasCoffees && <span>{stagedItems}</span>}
            <ShoppingCart size={22} weight="fill" />
          </IconButton>
        </NavLink>
      </ButtonContainer>
    </NavContainer>
  )
}
