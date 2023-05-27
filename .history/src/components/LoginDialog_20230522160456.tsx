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
    <button className={`bg-[#EFD117] hover:bg-[#c7b332] transition-all rounded-full mt-4 ml-24 mr-56 px-7 py-2 text-black font-bold text-xl ${props.className}`}>{props.text}</button>
  )
}

export default LoginDialog