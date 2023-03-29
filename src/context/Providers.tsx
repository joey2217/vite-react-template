import React, { memo } from 'react'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeContext'
import AntdProvider from './AntdProvider'

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <AntdProvider>{children}</AntdProvider>
    </ThemeProvider>
  )
}

export default memo(Providers)
