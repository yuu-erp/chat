import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/choose-wallet')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/choose-wallet"!</div>
}
