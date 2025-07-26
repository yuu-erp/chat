import React from 'react'

const AppSidebar = () => {
  return (
    <React.Fragment>
      <header className='flex select-none grow-1 flex-col basis-auto shrink-0 relative overflow-hidden z-30'>
        <div className='w-80 bg-white/10 backdrop-blur-2xl h-full'>
          <div className='fixed top-0 h-full flex flex-row w-full overflow-y-auto'>
            <div className='h-[300vh]'>
            AppSidebar
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default React.memo(AppSidebar)
