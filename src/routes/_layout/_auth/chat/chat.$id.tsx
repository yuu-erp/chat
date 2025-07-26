import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_auth/chat/chat/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/_auth/chat/chat/$id"!</div>
}
