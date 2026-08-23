// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import JokePage from '../jokes/JokePage'

export const AppRouter = () => {
  return (
  <Routes >
    <Route element={<App />}>
      <Route index path='/' element={<JokePage />} />
    </Route>
  </Routes>
  )
}
