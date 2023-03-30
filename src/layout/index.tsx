import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import AppMenu from './AppMenu'
import ThemeButton from './ThemeButton'

const AppLayout: React.FC = () => {
  return (
    <>
      <header className="container mx-auto flex items-center">
        <div>LOGO</div>
        <div className='mr-auto'>
          <AppMenu />
        </div>
        <ThemeButton />
      </header>
      <main className="container mx-auto py-4">
        <Outlet />
      </main>
    </>
  )
}

export default memo(AppLayout)
