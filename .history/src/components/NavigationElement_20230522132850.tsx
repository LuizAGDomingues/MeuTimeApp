import Link from 'next/link'
import React from 'react'

interface NavigationElementProps {
  href: string;
  text: string;
}

export default function NavigationElement(props: NavigationElementProps) {
  return (
    <Link href={''}></Link>
  )
}
