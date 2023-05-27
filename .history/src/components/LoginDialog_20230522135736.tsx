import React from 'react'

interface LoginDialogProps {
  className?: string,
  text: string
}

function LoginDialog(props: LoginDialogProps) {
  return (
    <button className=´´>{props.text}</button>
  )
}

export default LoginDialog