import React, { memo } from 'react'
import type { PropsWithChildren } from 'react'
import { ConfigProvider, App, theme, Layout } from 'antd'
import { useTheme } from './ThemeContext'

const { darkAlgorithm, defaultAlgorithm } = theme

const AntdProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme: localTheme } = useTheme()
  return (
    <ConfigProvider
      theme={{
        algorithm: localTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <App>
        <AntdLayout>{children}</AntdLayout>
      </App>
    </ConfigProvider>
  )
}

const AntdLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorText, colorBgBase },
  } = theme.useToken()
  return (
    <Layout
      className="min-h-screen"
      style={{
        color: colorText,
        backgroundColor: colorBgBase,
      }}
    >
      {children}
    </Layout>
  )
}

export default memo(AntdProvider)
