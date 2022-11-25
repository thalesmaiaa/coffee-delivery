import {
  Buy,
  Card,
  Tag,
  Tags,
  ProductImage,
  Description,
  Value,
  Counter,
  IconButton,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { CounterInput } from '../../../../components/Counter'
import { useContext } from 'react'
import { Coffee, CoffeesContext } from '../../../../contexts/CoffeesContext'

export function CardContent(coffee: Coffee) {
  const { name, tags, description, image, price } = coffee

  const { updateStagedItems } = useContext(CoffeesContext)

  function handleAddCoffee() {
    updateStagedItems()
  }

  return (
    <Card>
      <ProductImage>
        <img src={image} alt="" />
      </ProductImage>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}> {tag} </Tag>
        ))}
      </Tags>
      <Description>
        <span>{name}</span>
        <p>{description}</p>
      </Description>
      <Buy>
        <Value>
          <p>R$</p>
          <span>{`${price.toString().replace('.', ',')}`}</span>
        </Value>
        <Counter>
          <CounterInput item={coffee} />
          <IconButton onClick={() => handleAddCoffee()}>
            <ShoppingCart size={22} weight="fill" />
          </IconButton>
        </Counter>
      </Buy>
    </Card>
  )
}
