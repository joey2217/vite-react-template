import React, { memo } from 'react'
import { Switch } from 'antd'
import { useTheme } from '../context/ThemeContext'

const ThemeSwitch: React.FC = () => {
  const {theme, setTheme} = useTheme()
  return (
    <Switch
      checkedChildren="🌙"
      unCheckedChildren="☀"
      defaultChecked={theme === 'dark'}
      onChange={(checked) => {
        setTheme(checked ? 'dark' : 'light')
      }}
    />
  )
}

export default memo(ThemeSwitch)