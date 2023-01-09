type LocalAddressType = {
  streetTitle: string
  city: LocalCityType
}

type LocalCityType = {
  title: string
  countryTitle: string
}

type TechnologiesType = {
  id: number
  title: string
}

type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: LocalAddressType
  technologies: Array<TechnologiesType>
}

const student: StudentType = {
  id: 1,
  name: "Artem",
  age: 29,
  isActive: false,
  address: {
    streetTitle: "Surganova 2",
    city: {
      title: "Minsk",
      countryTitle: "Belarus"
    },
  },
  technologies: [
    {
      id: 1,
      title: "HTML"
    },
    {
      id: 2,
      title: "CSS"
    },
    {
      id: 3,
      title: "React"
    },
  ]
}

console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[0].title)