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
        <Dialog.Content className='w-[760] h-[472] bg-[#D5E2F1]'>
          <Dialog.Title>SOBRE O PROJETO</Dialog.Title>
          <Dialog.Description>Este site foi criado para o teste front-end da empresa Trade Technology. Esta é uma aplicação feita em NextJs, utilizando TypeScript, TailwindCss, Axios e outras tecnologias.Você pode encontrar diversas informações sobre futebol, como ligas, seu time preferido, escalações, saldo de gols, entre outras informações.Aproveite o site!</Dialog.Description>
          <Dialog.Close asChild>
            <XCircle size={34} color='red' />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SobreDialog