"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Luiz portfolio - HOME</title>
        <meta charSet='UTF-8'/>
        <meta name='author' content='Luiz Domingues'/>
        <meta name='description' content='Portfolio de Luiz Domingues, desenvolvedor web front-end'/>
        <meta name='keywords' content='front-end, front-end developer, web, developer, web developer, design, portfolio, html, css, javascript, js, typescript, ts, react, next, vue'/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="public/logo.ico" />
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
