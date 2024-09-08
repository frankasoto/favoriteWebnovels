import React from 'react';


export default function Navbar() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h1>Title goes here</h1>
        </div>
        <div>
          <h1>Banner goes here</h1>
        </div>
        <div>
          <button>Login</button>
          <button>Logout</button>
        </div>
      </div>
    </>
  )
}