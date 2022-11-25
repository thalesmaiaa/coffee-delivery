import { Introduction } from './components/Introduction'
import { Cards, MainContainer } from './styles'

import { CardContent as Card } from './components/Card'
import { coffeesList } from './components/types'

export function Home() {
  return (
    <>
      <Introduction />
      <MainContainer>
        <h3>Nossos cafés</h3>
        <Cards>
          {coffeesList.map((coffee) => (
            <Card key={coffee.image} {...coffee} />
          ))}
        </Cards>
      </MainContainer>
    </>
  )
}
