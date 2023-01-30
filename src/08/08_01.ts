// export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya']

export const usersObj = {
  '0': 'Dimych',
  '1': 'Natasha',
  '2': 'Valera',
  '3': 'Katya',
}

type usersType = {
  [key: string] : {id: number, name: string}
}

export const users = {
  '101': {id: 101, name: 'Dimych'},
  '3232312': {id: 3232312, name: 'Natasha'},
  '1212': {id: 1212, name: 'Valera'},
  '1': {id: 1, name: 'Katya'},
}

export const usersArray = [
  {id: 101, name: 'Dimych'},
  {id: 3232312, name: 'Natasha'},
  {id: 1212, name: 'Valera'},
  {id: 1, name: 'Katya'},
]