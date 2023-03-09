import React, { memo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import AppMenu from './AppMenu'
import ThemeSwitch from './ThemeSwitch'

const { Header, Sider, Content } = Layout

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken()

  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout
      className="min-h-screen"
      style={{ background: colorBgContainer, color: colorText }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="h-16 leading-[64px] text-center text-white">LOGO</div>
        <AppMenu />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="flex items-center"
          style={{ padding: 0, background: colorBgContainer }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className:
                'px-4 py-6 text-lg leading-[64px] cursor-pointer transition-colors mr-auto',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <ThemeSwitch />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default memo(AppLayout)
