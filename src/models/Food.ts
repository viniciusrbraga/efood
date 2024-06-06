class Food {
  id: number
  image: string
  infos: string[]
  title: string
  note: number
  description: string
  link: string

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    note: number,
    description: string,
    link: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.note = note
    this.description = description
    this.link = link
  }
}

export default Food
