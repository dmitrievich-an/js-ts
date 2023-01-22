

const predicate = (age: number) => {
  return age > 90;
}

type CourseType = {
  title: string
  price: number
}

const courses = [
  {title: "CSS", price: 110},
  {title: "JS", price: 200},
  {title: "REACT", price: 150},
]

const chipPredicate = (props: CourseType) => {
  return props.price < 160
}