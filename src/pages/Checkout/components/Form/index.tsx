import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { newDeliveryFormData } from '../..'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import {
  Row,
  Form as FormContainer,
  BaseInput,
  FullWidthInput,
  OptionalInput,
  FlexInput,
  SmallInput,
  FlexDiv,
} from './styles'

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<newDeliveryFormData>()

  const { getAddress } = useContext(CoffeesContext)

  const navigate = useNavigate()

  function handleCreateNewRequest(data: newDeliveryFormData) {
    const { street, number, city, uf, neighboor } = data
    getAddress({
      street: `${street}, ${number}`,
      city: `${neighboor} - ${city}, ${uf}`,
    })
    navigate('/success')
  }

  return (
    <FormContainer
      onSubmit={handleSubmit(handleCreateNewRequest)}
      id="delivery-form"
    >
      <Row>
        <div>
          <BaseInput placeholder="CEP" {...register('cep')}></BaseInput>
          <> {errors.cep && <p>{errors?.cep?.message}</p>}</>
        </div>
      </Row>
      <Row>
        <FullWidthInput placeholder="Rua" {...register('street')} />
        <>{errors.street && <p>{errors?.street?.message}</p>}</>
      </Row>

      <Row>
        <div>
          <BaseInput placeholder="Número" {...register('number')} />
          <>{errors.number && <p>{errors?.number?.message}</p>}</>
        </div>

        <OptionalInput data-required="Opcional">
          <FullWidthInput
            placeholder="Complemento"
            {...register('complement')}
          />
        </OptionalInput>
      </Row>
      <Row>
        <div>
          <BaseInput placeholder="Bairro" {...register('neighboor')} />
          {errors.neighboor && <p>{errors?.neighboor?.message}</p>}
        </div>
        <FlexDiv>
          <FlexInput placeholder="Cidade" {...register('city')} id="city" />
          {errors.city && <p>{errors?.city?.message}</p>}
        </FlexDiv>
        <div>
          <SmallInput placeholder="UF" {...register('uf')} id="uf" />
          {errors.uf && <p>{errors?.uf?.message}</p>}
        </div>
      </Row>
    </FormContainer>
  )
}
