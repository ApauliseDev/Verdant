import React from 'react'
import "../estilos/MyAccount.css";

export function MyAccount() {
  return (
    <div className='container-MyAccount'>
        <h1 className='titulo-Account'>Account Settings</h1>
        <div className='esqueleto'>
            <span className='contenerdor-spanUno'>
                <h2>First name</h2>
                <p className='parrafo-span'>Julian</p>
            </span>
            <span className='contenerdor-spanUno'>
                <h2>Last name</h2>
                <p className='parrafo-span'>Julian</p>
            </span>
        </div>
        <div className='esqueleto'>
            <span className='contenerdor-spanUno'>
                <h2>Email</h2>
                <p className='parrafo-span'>Julian</p>
            </span>
            <span className='contenerdor-spanUno'>
                <h2>Phone number</h2>
                <p className='parrafo-span'>Julian</p>
            </span>
        </div>
    </div>
  )
}

export default MyAccount
