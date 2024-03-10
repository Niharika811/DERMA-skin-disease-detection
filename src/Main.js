import React from 'react'

function Main() {
    const logout=()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
        <h1>main page</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Main