import { createContext, ReactNode, useState } from 'react'

export type Coffee = {
  name: string
  description: string
  image: string
  tags: string[]
  price: number
  addedTimes: number
}

export type Address = {
  street: string
  city: string
}

type CoffeesContextTypes = {
  paymentType: string
  address?: Address
  coffees: Coffee[]
  stagedItems: number
  updateStagedItems: () => void
  updateCoffeeAddedTimes: (item: Coffee) => void
  removeCoffeeAddedTimes: (item: Coffee) => void
  getCurrentTime: (item: Coffee) => number
  removeCoffee: (item: Coffee) => void
  getAddress: (address: Address) => void
  getPayment: (payment: string) => void
}

type ContextProps = {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextTypes)

export function CoffeesContextProvider({ children }: ContextProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [address, setAdress] = useState<Address>()
  const [stagedItems, setStagedItems] = useState<number>(0)
  const [paymentType, setPaymentType] = useState<string>('')

  function updateStagedItems() {
    setStagedItems(coffees.length)
  }

  function removeCoffee(item: Coffee) {
    const filteredCoffees = coffees.filter(
      (coffee) => coffee.name !== item.name,
    )
    setCoffees(filteredCoffees)
    setStagedItems((state) => state - 1)
  }

  function updateCoffeeAddedTimes(item: Coffee) {
    const isAdded = coffees.find((coffee) => coffee.name === item.name)
    if (isAdded) {
      const newTimes = coffees.map((coffee) => {
        if (coffee.name === isAdded.name) {
          return {
            ...coffee,
            addedTimes: coffee.addedTimes + 1,
          }
        }
        return coffee
      })
      setCoffees(newTimes)
    } else {
      setCoffees((state) => [...state, { ...item, addedTimes: 1 }])
    }
  }

  function removeCoffeeAddedTimes(item: Coffee) {
    const selectedCoffee = coffees.find((coffee) => coffee.name === item.name)

    const newCoffees = coffees.map((coffee) => {
      if (coffee.name === selectedCoffee?.name) {
        const nextTimeValue = coffee.addedTimes <= 0 ? 0 : coffee.addedTimes - 1

        return {
          ...coffee,
          addedTimes: nextTimeValue,
        }
      }
      return coffee
    })

    setCoffees(newCoffees)
  }

  function getCurrentTime(item: Coffee) {
    const currentAddedTime = coffees.find((coffee) => coffee.name === item.name)

    return currentAddedTime?.addedTimes || 0
  }

  function getAddress(item: Address) {
    setAdress(item)
  }

  function getPayment(payment: string) {
    console.log(payment)
    setPaymentType(payment)
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        stagedItems,
        updateStagedItems,
        updateCoffeeAddedTimes,
        removeCoffeeAddedTimes,
        getCurrentTime,
        removeCoffee,
        address,
        getAddress,
        getPayment,
        paymentType,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
