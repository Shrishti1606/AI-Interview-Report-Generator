import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from "./app.routes.jsx"
import { AuthProvider } from './features/auth/auth.context.jsx'
import { InterviewProvider }from './features/interview/interview.context.jsx'
import './features/interview/style/interview.scss'

const App = () => {

  const { loading } = useContext(AuthContext)

  if (loading) return (
    <div className="loading-screen">
      <div className="loader">
        <div className="loader__ring"></div>
        <div className="loader__ring"></div>
        <div className="loader__ring"></div>
        <p className="loader__text">Loading...</p>
      </div>
    </div>
  )

  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router = {router} />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App
