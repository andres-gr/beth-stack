import Html from '@kitajs/html'

import { Todo } from '@/db'

import { TodoItem } from '.'

interface ListProps {
  todos: Todo[]
}

const List: Html.Component<ListProps> = ({ todos: safeTodos }) => (
  <div>
    {safeTodos.map(todo => (
      <TodoItem {...todo} />
    ))}
  </div>
)

export default List
