'use client'
import React from 'react'
import BottomMenu from './components/bottom-menu'
import TopMenu from './components/top-menu'
import { motion } from 'framer-motion'

export default function ContentLayout ({
  children,
  section,
  background = '1'
}: {
  children?: React.JSX.Element;
  section: string;
  background?: string;
}): React.JSX.Element {
  return (
    <div className={`background-content-${background} relative w-full min-h-screen pb-24 overflow-hidden`}>
      <TopMenu section={section} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>

      <BottomMenu section={section} />
    </div>
  )
}
