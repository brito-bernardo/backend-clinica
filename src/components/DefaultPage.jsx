import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function DefaultPage() {
  return (
    <>
    <Topbar/>
    <Sidebar/>
    <Outlet/>
    </>
  )
}
