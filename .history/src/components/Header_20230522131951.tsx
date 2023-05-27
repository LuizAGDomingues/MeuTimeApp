import React from 'react'
import LoginDialog from './LoginDialog'
import logo from '../assets/logo.png'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <Image />
        
      </div>
      <LoginDialog />

    </div>
  )
}

export default Header