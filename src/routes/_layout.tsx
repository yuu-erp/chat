import LayoutWindow from '@/layouts/layout-window'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: LayoutWindow,
})

