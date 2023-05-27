import React from 'react'
import LoginDialog from './LoginDialog'
import logo from '../assets/logo.png'
import Image from 'next/image'
import NavigationElement from './NavigationElement'

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col items-center ml-7'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold text-center'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>
      <LoginDialog />
      <div className='flex items-center justify-evenly'>
        <NavigationElement href='' text='' />
        <NavigationElement />
        <NavigationElement />
        <NavigationElement />
        <NavigationElement />
      </div>

    </div>
  )
}

export default Header