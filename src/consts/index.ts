interface ConcreteEntry {
  name: string
  fullname: string
  value: string
  delivery: boolean
  prices: {
    hardCash: number
    withoutVAT: number
    withVAT: number
  }
}

const concreteEntries: ConcreteEntry[] = [
  {
    name: 'Б 150',
    fullname: 'Б 150 с доставкой',
    value: 'Б-150__delivery',
    delivery: true,
    prices: {
      hardCash: 4200,
      withoutVAT: 4300,
      withVAT: 4450,
    },
  },
  {
    name: 'Б 150',
    fullname: 'Б 150 без доставки',
    value: 'Б-150__no-delivery',
    delivery: false,
    prices: {
      hardCash: 3850,
      withoutVAT: 3950,
      withVAT: 4100,
    },
  },
  {
    name: 'Б 200',
    fullname: 'Б 200 с доставкой',
    value: 'Б-200__delivery',
    delivery: true,
    prices: {
      hardCash: 4550,
      withoutVAT: 4700,
      withVAT: 4800,
    },
  },
  {
    name: 'Б 200',
    fullname: 'Б 200 без доставки',
    value: 'Б-200__no-delivery',
    delivery: false,
    prices: {
      hardCash: 4200,
      withoutVAT: 4350,
      withVAT: 4450,
    },
  },
  {
    name: 'Б 250',
    fullname: 'Б 250 с доставкой',
    value: 'Б-250__delivery',
    delivery: true,
    prices: {
      hardCash: 4800,
      withoutVAT: 4900,
      withVAT: 5050,
    },
  },
  {
    name: 'Б 250',
    fullname: 'Б 250 без доставки',
    value: 'Б-250__no-delivery',
    delivery: false,
    prices: {
      hardCash: 4450,
      withoutVAT: 4550,
      withVAT: 4700,
    },
  },
  {
    name: 'Б 300',
    fullname: 'Б 300 с доставкой',
    value: 'Б-300__delivery',
    delivery: true,
    prices: {
      hardCash: 5050,
      withoutVAT: 5200,
      withVAT: 5350,
    },
  },
  {
    name: 'Б 300',
    fullname: 'Б 300 без доставки',
    value: 'Б-300__no-delivery',
    delivery: false,
    prices: {
      hardCash: 4700,
      withoutVAT: 4850,
      withVAT: 5000,
    },
  },
  {
    name: 'Б 350',
    fullname: 'Б 350 с доставкой',
    value: 'Б-350__delivery',
    delivery: true,
    prices: {
      hardCash: 5400,
      withoutVAT: 5550,
      withVAT: 5700,
    },
  },
  {
    name: 'Б 350',
    fullname: 'Б 350 без доставки',
    value: 'Б-350__no-delivery',
    delivery: false,
    prices: {
      hardCash: 5050,
      withoutVAT: 5200,
      withVAT: 5350,
    },
  },
]

export { type ConcreteEntry, concreteEntries }
