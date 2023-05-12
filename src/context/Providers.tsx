import React, { memo } from 'react'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeContext'

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default memo(Providers)
