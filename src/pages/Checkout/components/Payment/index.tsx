import { useContext } from 'react'

import {
  Button,
  ButtonsContainer as Container,
  PaymentsHeaders,
} from './styles'

import { Money, Bank, CreditCard, CurrencyDollar } from 'phosphor-react'
import { Labels } from '../Labels'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

export function Payments() {
  const { getPayment } = useContext(CoffeesContext)

  function handlePayments(event: any) {
    getPayment(event.target.innerText)
  }

  return (
    <>
      <PaymentsHeaders>
        <CurrencyDollar size={22} />
        <Labels
          title="Pagamento"
          subtitle=" O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
      </PaymentsHeaders>
      <Container>
        <Button onClick={handlePayments}>
          <CreditCard size={16} />
          Cartão de crédito
        </Button>
        <Button onClick={handlePayments}>
          <Bank size={16} />
          Cartão de débito
        </Button>
        <Button onClick={handlePayments}>
          <Money size={16} />
          Dinheiro
        </Button>
      </Container>
    </>
  )
}
