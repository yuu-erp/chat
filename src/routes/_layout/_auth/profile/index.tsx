import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_auth/profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/_auth/profile/"!</div>
}
