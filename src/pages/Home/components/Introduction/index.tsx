import {
  CartButton,
  CoffeeButton,
  IntroductionContainer,
  ItemsContainer,
  PackageButton,
  TimerButton,
  TitleContainer,
} from './styles'

import introImage from '../../../../assets/intro-image.svg'
import { ShoppingCart, Coffee, Timer, Package } from 'phosphor-react'

export function Introduction() {
  return (
    <IntroductionContainer>
      <div>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>
        <ItemsContainer>
          <span>
            <CartButton>
              <ShoppingCart size={16} weight="fill" />
            </CartButton>
            Compra simples e segura
          </span>
          <span>
            <PackageButton>
              <Package size={16} weight="fill" />
            </PackageButton>
            Embalagem mantém o café intacto
          </span>
          <span>
            <TimerButton>
              <Timer size={16} weight="fill" />
            </TimerButton>
            Entrega rápida e rastreada
          </span>
          <span>
            <CoffeeButton>
              <Coffee size={16} weight="fill" />
            </CoffeeButton>
            O café chega fresquinho até você
          </span>
        </ItemsContainer>
      </div>
      <img src={introImage} alt="" />
    </IntroductionContainer>
  )
}
