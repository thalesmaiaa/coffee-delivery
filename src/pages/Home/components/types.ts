import express from '../../../assets/express.svg'
import americano from '../../../assets/americano.svg'
import cremoso from '../../../assets/cremoso.svg'
import gelado from '../../../assets/gelado.svg'
import cafe from '../../../assets/cafe.svg'
import latte from '../../../assets/latte.svg'
import capuccino from '../../../assets/capuccino.svg'
import macchiato from '../../../assets/macchiato.svg'
import mocaccino from '../../../assets/mocaccino.svg'
import quente from '../../../assets/quente.svg'
import cubano from '../../../assets/cubano.svg'
import havaiano from '../../../assets/havaiano.svg'
import arabe from '../../../assets/arabe.svg'
import irlandes from '../../../assets/irlandes.svg'
import { Coffee } from '../../../contexts/CoffeesContext'

export const coffeesList: Coffee[] = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    image: express,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    image: americano,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    image: cremoso,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Expresso Gelado',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional', 'Gelado'],
    image: gelado,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com leite  '],
    image: cafe,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com leite'],
    image: latte,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    image: capuccino,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com leite'],
    image: macchiato,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    image: mocaccino,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'Com leite'],
    image: quente,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'Com leite'],
    image: cubano,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    image: havaiano,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    image: arabe,
    addedTimes: 0,
    price: 9.9,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    image: irlandes,
    addedTimes: 0,
    price: 9.9,
  },
]
