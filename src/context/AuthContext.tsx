import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { PropsWithChildren } from 'react'

interface UserInfo {
  id: number
  name: string
}

interface AuthProps {
  userInfo: UserInfo | null
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>
}

const AuthContext = React.createContext<AuthProps>({
  userInfo: null,
  setUserInfo: () => {},
})

export function useAuth() {
  return React.useContext(AuthContext)
}

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {userInfo ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </AuthContext.Provider>
  )
}
