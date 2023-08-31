'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <meta name='theme-color' content='#E9E9E9' />
      <AnimatePresence>
        <body className={inter.className}>{children}</body>
      </AnimatePresence>
    </html>
  )
}
