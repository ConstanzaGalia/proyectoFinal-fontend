import React from 'react'
import NavBar from '../components/NavBar'

export default function Productos({token, user, setToken}) {
  return (
    <div>
      <NavBar token={token} user={user} setToken={setToken}/>
      <h1>Productos</h1>
    </div>
  )
}
