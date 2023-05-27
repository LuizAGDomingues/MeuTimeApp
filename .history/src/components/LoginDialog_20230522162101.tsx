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
        <button className={`bg-[#EFD117] hover:bg-[#c7b332] transition-all rounded-full mt-4 ml-24 mr-56 px-7 py-2 text-black font-bold text-xl ${props.className}`}>{props.text}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className='w-[664px] h-[472] bg-[#D5E2F1] rounded-3xl border py-6 px-12 border-black flex flex-col items-center font-bold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex items-center justify-between w-full'>
            <Dialog.Title>LOGIN</Dialog.Title>
            <Dialog.Close asChild>
              <button><XCircle size={34} color='red' /></button>
            </Dialog.Close>
          </div>
          <form action="submit" className='mt-7'>
            <label htmlFor="">Entre com a sua chave da API football:</label>
            <input type="text" className='bg-[#959EA7] p-3 w-full' placeholder='***************' />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default LoginDialog