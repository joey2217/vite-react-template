import React, { memo } from 'react'
import { Menu } from 'antd'
import { HomeOutlined} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    label: <Link to="/">Home</Link>,
    key: '/',
    icon: <HomeOutlined />,
  },
]

const AppMenu: React.FC = () => {
  const location = useLocation()
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[location.pathname]}
      items={items}
    />
  )
}

export default memo(AppMenu)
