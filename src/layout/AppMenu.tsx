import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const AppMenu: React.FC = () => {
  return (
    <nav className="flex gap-2">
      <NavLink className="link" to="/">
        首页
      </NavLink>
    </nav>
  )
}

export default memo(AppMenu)
