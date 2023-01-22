export type ManType = {
  name: string
  age: number
}

const people: Array<ManType> = [
  {name: "Andrey Ivanov", age: 33},
  {name: "Alexander Petrov", age: 24},
  {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => {
  return {
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
  }
}

dimychTransformator(people[0])