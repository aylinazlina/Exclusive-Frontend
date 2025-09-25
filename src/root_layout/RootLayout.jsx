import React from 'react'
import Header from '../common_components/Header'
import { Outlet } from 'react-router'
import Navbar from '../common_components/Navbar'

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/> 
    </div>
  )
}

export default RootLayout
