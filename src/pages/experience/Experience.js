import { Inter } from 'next/font/google'
import { useState } from 'react'
import SbeSection from './SbeSection'
import BitcowSection from './BitcowSection'
const inter = Inter({ subsets: ['latin'] })

export default function Experience() {

  return (
    <div className='flex flex-col items-center pt-10 max-w-3xl'>
      <h2 className={`${inter.className} text-2xl font-semibold`}>Experience</h2>
      <SbeSection />
      <BitcowSection />
    </div>
  )
}