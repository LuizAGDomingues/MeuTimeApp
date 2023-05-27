import React from 'react'
import LoginDialog from './LoginDialog'
import logo from '../assets/logo.png'
import Image from 'next/image'
import NavigationElement from './NavigationElement'

function Header() {
  return (
    <div className='flex'>
      <div className='flex flex-col items-center ml-7'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold text-center'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>
      <LoginDialog text='Iniciar' className='h-[55px]' />
      <div className='flex justify-between gap-32 mt-6 h-7'>
        <NavigationElement href='/' text='Início' />
        <></>
        <NavigationElement href='/times' text='Times' />
        <NavigationElement href='/jogadores' text='Jogadores' />
        <NavigationElement href='/estatisticas' text='Estatísticas' />
      </div>

    </div>
  )
}

export default Header