import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { Coffee, CoffeesContext } from '../../contexts/CoffeesContext'
import { InputArea } from './styles'

type Props = {
  item: Coffee
}

export function CounterInput({ item }: Props) {
  const { updateCoffeeAddedTimes, removeCoffeeAddedTimes, getCurrentTime } =
    useContext(CoffeesContext)

  const time = getCurrentTime(item)

  return (
    <InputArea>
      <Minus
        size={14}
        weight="fill"
        onClick={() => removeCoffeeAddedTimes(item)}
      />
      <p>{time}</p>
      <Plus
        size={14}
        weight="fill"
        onClick={() => updateCoffeeAddedTimes(item)}
      />
    </InputArea>
  )
}
