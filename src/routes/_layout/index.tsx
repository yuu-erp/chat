import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: App
})

function App() {
  const onClickAddUser = () => {}
  return (
    <div className='text-center'>
      <button>ADD USER</button>
    </div>
  )
}
