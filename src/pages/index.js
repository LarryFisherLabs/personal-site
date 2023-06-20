import { Inter } from 'next/font/google'
import { useState } from 'react'
import About from './about/About'
import Experience from './experience/Experience'

const inter = Inter({ subsets: ['latin'] })

// buttonIndex:
// 0 - left
// 1 - middle
// 2 - right
const getNavButtonClass = (buttonIndex, selectedIndex) => {
  let classList = 'w-32 lg:px-4 lg:w-fit'
  if (buttonIndex === 0) classList = classList + ' rounded-l-lg'
  else if (buttonIndex === 2) classList = classList + ' rounded-r-lg'
  if (buttonIndex === selectedIndex) classList = classList + ' bg-purple-400/90 border'
  else classList = classList + ' opacity-90 bg-purple-600/90 border border-black hover:opacity-100 hover:bg-purple-400/70 active:bg-purple-400/80'
  return classList
}

export default function Home() {
  // 0 - about
  // 1 - experience
  // 2 - projects
  const [sectionIndex, setSectionIndex] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-10">
      <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:min-w-full'>
        <div className='flex flex-col items-center lg:items-start'>
          <h1 className={`${inter.className} text-4xl font-semibold`}>Hello</h1>
          <p className='text-lg pb-2 lg:pb-0'>Lars Here</p>
        </div>
        <div className='rounded-xl inline-flex h-8'>
          <button className={getNavButtonClass(0, sectionIndex)} onClick={() => setSectionIndex(0)}>About</button>
          <button className={getNavButtonClass(1, sectionIndex)} onClick={() => setSectionIndex(1)}>Experience</button>
          <button className={getNavButtonClass(2, sectionIndex)} onClick={() => setSectionIndex(2)}>Projects</button>
        </div>
      </div>
      {
        sectionIndex === 0 ? (
          <About />
        ) : sectionIndex === 1 ? (
          <Experience />
        ) : (
          <div className='flex flex-col items-center pt-10 max-w-3xl'>
            <h2 className={`${inter.className} text-2xl font-semibold`}>Projects</h2>
            <div className='p-5 rounded-lg bg-purple-400/20 border-2 m-4 lg:p-7'>
              <p className='text-center'>I build</p>
            </div>
          </div>
        )
      }
    </main>
  )
}
