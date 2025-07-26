import AppSidebar from '@/shared/partials/app-sidebar'
import { Outlet } from '@tanstack/react-router'
import React from 'react'

export default function LayoutWindow() {
  return (
    <React.Fragment>
      <div className='h-full min-h-screen w-full flex flex-row items-stretch shrink-0 relative overflow-hidden z-10'>
        <AppSidebar />
        <main className='flex flex-1 items-start shrink-1 grow-1 flex-col shrink-0 relative overflow-hidden z-0'>
          <Outlet />
        </main>
      </div>
      <div className="fixed inset-0 z-0">
        <img src="/background.webp" className='w-full h-full object-cover' alt="" />
        <div className='bg-white/10 backdrop-blur-2xl absolute inset-0'></div>
      </div>
    </React.Fragment>
  )
}
