import React from 'react'
import Header from '../common_components/Header'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
