class Food {
  image: string
  price: number
  id: number
  name: string
  description: string
  portion: string

  constructor(
    image: string,
    price: number,
    id: number,
    name: string,
    description: string,
    portion: string
  ) {
    this.image = image
    this.price = price
    this.id = id
    this.name = name
    this.description = description
    this.portion = portion
  }
}

export default Food
