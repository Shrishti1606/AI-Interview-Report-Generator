import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from "./app.routes.jsx"
import { AuthProvider } from './features/auth/auth.context.jsx'
import { InterviewProvider }from './features/interview/interview.context.jsx'
import { AuthContext } from './context/AuthContext'

const App = () => {

  const { loading } = useContext(AuthContext)

  // ✅ Block ALL rendering until auth check is done
  if (loading) return <main><h1>Loading...</h1></main>

  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router = {router} />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App
