import {
  Content,
  DollarIcon,
  Headers,
  Image,
  MapPinIcon,
  OrderInfo,
  Row,
  SuccessContainer,
  TimerIcon,
} from './styles'

import illustration from '../../assets/Illustration.svg'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Success() {
  const { address, paymentType } = useContext(CoffeesContext)

  return (
    <SuccessContainer>
      <Headers>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é so aguardar que logo o café chegará até você</p>
      </Headers>
      <Content>
        <OrderInfo>
          <Row>
            <MapPinIcon size={32} weight="fill" />
            <div>
              Entrega em <span>{address?.street}</span>
              <p>{address?.city}</p>
            </div>
          </Row>
          <Row>
            <TimerIcon size={32} weight="fill" />
            <div>
              Previsão de entrega
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </Row>
          <Row>
            <DollarIcon size={32} weight="fill" />
            <div>
              Pagamento na entrega
              <p>
                {' '}
                <span>{paymentType}</span>
              </p>
            </div>
          </Row>
        </OrderInfo>

        <Image src={illustration} alt="" />
      </Content>
    </SuccessContainer>
  )
}
