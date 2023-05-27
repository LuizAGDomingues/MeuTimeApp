import React from 'react'
import LoginDialog from './LoginDialog'
import logo from '../assets/logo.png'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold text-center'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>
      <LoginDialog />

    </div>
  )
}

export default Header