import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_auth/setting/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/_auth/setting/"!</div>
}
