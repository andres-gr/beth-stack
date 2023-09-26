export interface Todo {
  id: number
  content: string
  done: boolean
}

const db: Todo[] = [
  {
    id: 1,
    content: 'do this',
    done: true,
  },
  {
    id: 2,
    content: 'do that',
    done: false,
  },
]

export { db }
