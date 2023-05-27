import Link from 'next/link'
import React from 'react'

interface NavigationElementProps {
  href: string;
  text: string;
}

export default function NavigationElement(props: NavigationElementProps) {
  return (
    <Link href={props.href} className='font-bold text-lg text-white w-auto uppercase hover:text-[#324c60] transition-all'>{props.text}</Link>
  )
}
