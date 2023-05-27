"use client"

import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { XCircle } from '@phosphor-icons/react';

function SobreDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='font-bold text-lg text-white uppercase hover:text-[#EFD117] transition-all'>Sobre</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className='w-[664px] h-[472] bg-[#D5E2F1] rounded-3xl border py-6 px-12 border-black flex flex-col items-center font-bold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div>
            <Dialog.Title className=''>SOBRE O PROJETO</Dialog.Title>
            <Dialog.Close asChild>
              <button><XCircle size={34} color='red' /></button>
            </Dialog.Close>
          </div>
          <Dialog.Description className='mt-6'>Este site foi criado para o teste front-end da empresa Trade Technology. Esta é uma aplicação feita em NextJs, utilizando TypeScript, TailwindCss, Axios e outras tecnologias.<br/>Você pode encontrar diversas informações sobre futebol, como ligas, seu time preferido, escalações, saldo de gols, entre outras informações.<br/>Aproveite o site!</Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SobreDialog