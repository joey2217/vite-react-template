import React, { memo, useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
// import { fetchUserInfo } from '@/api/user'

const AuthRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { userInfo, setUserInfo } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // console.log(userInfo, token)
    if (userInfo == null) {
    //   fetchUserInfo()
    //     .then((info) => {
    //       setUserInfo(info)
    //     })
    //     .catch((error) => {
    //       console.error('fetchUserInfo error', error, token)
    //       setToken('')
    //       navigate('/login?from=' + location.pathname)
    //     })
    }
  }, [location.pathname, navigate, setUserInfo, userInfo])

  if (userInfo) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
}

export default memo(AuthRoute)