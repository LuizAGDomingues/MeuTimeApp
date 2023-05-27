"use client"

import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { XCircle } from '@phosphor-icons/react';

interface LoginDialogProps {
  className?: string,
  text: string
}

function LoginDialog(props: LoginDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`bg-[#EFD117] hover:bg-[#c7b332] transition-all rounded-full mt-4 ml-24 mr-56 px-7 py-2 text-black font-bold text-lg ${props.className}`}>{props.text}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className='w-[664px] bg-[#D5E2F1] rounded-3xl border py-6 px-12 border-black flex flex-col items-center font-bold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex items-center justify-between w-full'>
            <Dialog.Title>LOGIN</Dialog.Title>
            <Dialog.Close asChild>
              <button><XCircle size={34} color='red' /></button>
            </Dialog.Close>
          </div>
          <form action="submit" className='mt-7 mb-2 w-full flex flex-col items-center'>
            <label htmlFor="">Entre com a sua chave da API football:</label>
            <input type="text" className='bg-[#959EA7] px-3 py-2 w-full placeholder:text-white rounded-lg mt-2' placeholder='***************' />
            <button type="submit" className='mt-8 bg-[#EFD117] hover:bg-[#c7b332] transition-all border-2 border-[#6B622B] rounded-full w-28 px-7 py-2 text-black font-bold text-lg'>Entrar</button>
          </form>
          <span className='text-red'>Esta funcionalidade não esta implementada para fins de facilitar o test do app por outros usuários.</span>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default LoginDialog