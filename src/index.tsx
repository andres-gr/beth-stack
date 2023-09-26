import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

import { Base, TodoList } from '@/templates'
import { db } from '@/db'

import { BaseStyles, SpanStyles } from '~/styles'

const PORT = 3000

const ely = new Elysia()
const app = ely.use(html as unknown as Elysia['use']).use(staticPlugin())

app.get('/', () => (
  <Base>
    <body
      class={BaseStyles}
      hx-get="/todos"
      hx-swap="innerHTML"
      hx-trigger="load"
    />
  </Base>
))

app.post('/clicked', () => (
  <div>
    <span class={SpanStyles}>from beyond the server</span>
  </div>
))

app.get('/todos', () => <TodoList todos={db} />)

app.listen(PORT, () => {
  console.log(`🦊 running at http://${app.server?.hostname}:${app.server?.port}`)
})
