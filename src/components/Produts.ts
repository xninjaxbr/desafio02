import Expresso from '../assets/Expresso.png'
import Americano from '../assets/Americano.png'
import Arabe from '../assets/Arabe.png'
import CafecomLeite from '../assets/CafecomLeite.png'
import CafeGelado from '../assets/CafeGelado.png'
import Capuccino from '../assets/Capuccino.png'
import ChocolateQuente from '../assets/ChocolateQuente.png'
import Cubano from '../assets/Cubano.png'
import ExpressoCremoso from '../assets/ExpressoCremoso.png'
import Havaiano from '../assets/Havaiano.png'
import Irlandes from '../assets/Irlandes.png'
import Latte from '../assets/Latte.png'
import Macchiato from '../assets/Macchiato.png'
import Mochaccino from '../assets/Mochaccino.png'

interface Iproduts {
  id: number
  imgCoffee: string
  tagCoffee: string[]
  titleCoffee: string
  priceCoffee: number
  discriptionCoffee: string
}

export const ProdutsList: Iproduts[] = [
  {
    id: 1,
    imgCoffee: Expresso,
    tagCoffee: ['tradicional'],
    titleCoffee: 'Café Expresso',
    discriptionCoffee:
      'O tradicional café feito com água quente e grãos moídos',
    priceCoffee: 990,
  },
  {
    id: 2,
    imgCoffee: Americano,
    tagCoffee: ['tradicional'],
    titleCoffee: 'Expresso Americano',
    discriptionCoffee: 'Expresso diluído, menos intenso que o tradicional',
    priceCoffee: 990,
  },
  {
    id: 3,
    imgCoffee: ExpressoCremoso,
    tagCoffee: ['tradicional'],
    titleCoffee: 'Expresso Cremoso',
    discriptionCoffee: 'Café expresso tradicional com espuma cremosa',
    priceCoffee: 990,
  },
  {
    id: 4,
    imgCoffee: CafeGelado,
    tagCoffee: ['tradicional', 'gelado'],
    titleCoffee: 'Expresso Gelado',
    discriptionCoffee: 'Bebida preparada com café expresso e cubos de gelo',
    priceCoffee: 990,
  },
  {
    id: 5,
    imgCoffee: CafecomLeite,
    tagCoffee: ['tradicional', 'leite'],
    titleCoffee: 'Café com Leite',
    discriptionCoffee:
      'Meio a meio de expresso tradicional com leite vaporizado',
    priceCoffee: 990,
  },
  {
    id: 6,
    imgCoffee: Latte,
    tagCoffee: ['tradicional', 'leite'],
    titleCoffee: 'Latte',
    discriptionCoffee:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    priceCoffee: 990,
  },
  {
    id: 7,
    imgCoffee: Capuccino,
    tagCoffee: ['tradicional', 'leite'],
    titleCoffee: 'Capuccino',
    discriptionCoffee:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceCoffee: 990,
  },
  {
    id: 8,
    imgCoffee: Macchiato,
    tagCoffee: ['tradicional', 'leite'],
    titleCoffee: 'Macchiato',
    discriptionCoffee:
      'Café expresso misturado com um pouco de leite quente e espuma',
    priceCoffee: 990,
  },
  {
    id: 9,
    imgCoffee: Mochaccino,
    tagCoffee: ['tradicional', 'leite'],
    titleCoffee: 'Mocaccino',
    discriptionCoffee:
      'Café expresso com calda de chocolate, pouco leite e espuma',
    priceCoffee: 990,
  },
  {
    id: 10,
    imgCoffee: ChocolateQuente,
    tagCoffee: ['especial', 'leite'],
    titleCoffee: 'Chocolate Quente',
    discriptionCoffee:
      'Bebida feita com chocolate dissolvido no leite quente e café',
    priceCoffee: 990,
  },
  {
    id: 11,
    imgCoffee: Cubano,
    tagCoffee: ['especial', 'alcóolico', 'gelado'],
    titleCoffee: 'Cubano',
    discriptionCoffee:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    priceCoffee: 990,
  },
  {
    id: 12,
    imgCoffee: Havaiano,
    tagCoffee: ['especial'],
    titleCoffee: 'Havaiano',
    discriptionCoffee: 'Bebida adocicada preparada com café e leite de coco',
    priceCoffee: 990,
  },
  {
    id: 13,
    imgCoffee: Arabe,
    tagCoffee: ['especial'],
    titleCoffee: 'Árabe',
    discriptionCoffee: 'Bebida preparada com grãos de café árabe e especiarias',
    priceCoffee: 990,
  },
  {
    id: 14,
    imgCoffee: Irlandes,
    tagCoffee: ['especial', 'alcóolico'],
    titleCoffee: 'Irlandês',
    discriptionCoffee:
      'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    priceCoffee: 990,
  },
]
