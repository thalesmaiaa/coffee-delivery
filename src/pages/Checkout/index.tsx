import { Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { MapPinLine, Trash } from 'phosphor-react'
import { Payments } from './components/Payment'
import { Form } from './components/Form'
import { Labels } from './components/Labels'
import {
  Actions,
  AddressContainer,
  ButtonItem,
  CardContainer,
  CardContent,
  CardItem,
  CheckoutContainer,
  CoffeeName,
  Details,
  Display,
  Divider,
  FormCard,
  FormTitleContainer,
  ItemsList,
  Label,
  ListItem,
  ListRow,
  Price,
  SubmitButton,
  Total,
} from './styles'

import { CounterInput } from '../../components/Counter'
import { CoffeesContext } from '../../contexts/CoffeesContext'

const newDeliveryFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'Favor digitar o CEP correto'),
  street: zod.string().min(1, 'Favor digitar uma rua válida'),
  number: zod.string().min(1, 'Favor digitar um número válido'),
  complement: zod.string().optional(),
  neighboor: zod.string().min(1, 'Favor digitar um bairro'),
  city: zod.string().min(1, 'Digite a cidade'),
  uf: zod.string().length(2, 'Digite o estado'),
})

export type newDeliveryFormData = zod.infer<
  typeof newDeliveryFormValidationSchema
>

export function Checkout() {
  const navigate = useNavigate()

  const newDeliveryForm = useForm<newDeliveryFormData>({
    resolver: zodResolver(newDeliveryFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      city: '',
      uf: '',
    },
  })

  const {
    formState: { errors },
  } = newDeliveryForm

  const { coffees, removeCoffee, getCurrentTime } = useContext(CoffeesContext)

  const addedCoffees = coffees.map((coffee) => {
    return { price: coffee.price, times: coffee.addedTimes }
  })

  const finalPrice = addedCoffees
    .map((coffee) => coffee.price * coffee.times)
    .reduce((a, b) => a + b, 0)

  const haveCoffees = coffees.length > 0

  useEffect(() => {
    if (!haveCoffees) {
      navigate('/')
    }
  }, [haveCoffees, navigate])

  return (
    <CheckoutContainer>
      <AddressContainer>
        <Label>Complete seu pedido</Label>
        <FormCard>
          <FormTitleContainer>
            <MapPinLine size={22} />
            <Labels
              title="Endereço de Entrega"
              subtitle=" Informe o endereço onde deseja receber seu pedido"
            />
          </FormTitleContainer>
          <FormProvider {...newDeliveryForm}>
            <Form />
          </FormProvider>
        </FormCard>
        <FormCard>
          <Payments />
        </FormCard>
      </AddressContainer>
      <CardContainer>
        <Label>Cafés selecionados</Label>
        <FormCard>
          <CardContent>
            {coffees.map((coffee) => (
              <Fragment key={coffee.image}>
                <CardItem>
                  <img src={coffee.image} alt="" />
                  <Display>
                    <Details>
                      <CoffeeName>{coffee.name}</CoffeeName>

                      <Actions>
                        <CounterInput item={coffee} />
                        <ButtonItem onClick={() => removeCoffee(coffee)}>
                          <Trash size={16} />
                          <p> REMOVER</p>
                        </ButtonItem>
                      </Actions>
                    </Details>
                    <Price>
                      R$
                      {`${(coffee.price * getCurrentTime(coffee))
                        .toFixed(2)
                        .toString()
                        .replace('.', ',')}`}
                    </Price>
                  </Display>
                </CardItem>
              </Fragment>
            ))}
          </CardContent>

          <Divider />
          <ItemsList>
            <ListRow>
              <ListItem>Total de itens</ListItem>
              <ListItem>
                R$ {`${finalPrice.toFixed(2).toString().replace('.', ',')}`}
              </ListItem>
            </ListRow>
            <ListRow>
              <ListItem>Entrega</ListItem>
              <ListItem>R$ 3,50</ListItem>
            </ListRow>
            <ListRow>
              <Total>Total</Total>
              <Total>
                R$ {`${(finalPrice + 3.5).toString().replace('.', ',')}`}
              </Total>
            </ListRow>
          </ItemsList>
          <SubmitButton
            form="delivery-form"
            disabled={Object.keys(errors).length > 0}
          >
            Confirmar PEDIDO
          </SubmitButton>
        </FormCard>
      </CardContainer>
    </CheckoutContainer>
  )
}
