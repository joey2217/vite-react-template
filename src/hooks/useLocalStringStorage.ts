import { useEffect, useState } from 'react'

export default function useLocalStringStorage(
  key: string,
  defalutValue: string
) {
  const [value, setValue] = useState(defalutValue)
  useEffect(() => {
    const localData = localStorage.getItem(key)
    if (localData) {
      setValue(localData)
    } else {
      setValue(defalutValue)
    }
  }, [defalutValue, key])

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue] as const
}
