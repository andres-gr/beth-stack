import Html from '@kitajs/html'
import type { Todo } from '@/db'

import { ItemContainer, ItemDeleteBtn } from '~/styles'

const Item: Html.Component<Todo> = ({ content, done }) => (
  <div class={ItemContainer}>
    <p safe>{content}</p>
    <input
      checked={done}
      type="checkbox"
    />
    <button class={ItemDeleteBtn}>X</button>
  </div>
)

export default Item
