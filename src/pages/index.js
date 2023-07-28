import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import About from './about/About'
import Experience from './experience/Experience'
import Projects from './projects/Projects'
import Head from 'next/head'
import TextButton from '@component/components/TextButton'

const inter = Inter({ subsets: ['latin'] })

/**
 * Compile tailwind class names for nav bar buttons assuming there's 3 buttons.
 * 
 * @param {*} buttonIndex determines button position: 0 - left, 1 - middle, 2 - right
 * @param {*} selectedIndex index of the currently selected option
 * @returns tailwind classes for nav bar buttons
 */
const getNavButtonClass = (buttonIndex, selectedIndex) => {
  let classList = 'w-32 lg:px-4 lg:w-fit'
  if (buttonIndex === 0) classList = classList + ' rounded-l-lg'
  else if (buttonIndex === 2) classList = classList + ' rounded-r-lg'
  if (buttonIndex === selectedIndex) classList = classList + ' bg-purple-400/90 border'
  else classList = classList + ' opacity-90 bg-purple-600/90 border border-black hover:opacity-100 hover:bg-purple-400/70 active:bg-purple-400/80'
  return classList
}

export default function Home() {
  /*
   * sectionIndex options:
   *   - 0: about,
   *   - 1: experience,
   *   - 2: projects
   */
  const [sectionIndex, setSectionIndex] = useState(0)

  // keep track of view height to keep bottom banner on screen for mobile when url bar is down
  const [viewHeight, setViewHeight] = useState(null)

  useEffect(() => {
    setViewHeight(window.innerHeight)

    const handleResize = () => {
      setViewHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Larry Fisher Labs</title>
        <meta name='description' content='The personal website of Lars.'/>
      </Head>
      <main className={'relative flex flex-col items-center p-4 lg:p-10 ' + (viewHeight === null ? 'min-h-screen' : null)} style={viewHeight !== null ? {'minHeight': viewHeight} : null} >
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
        <div className='pb-10 lg:pb-7'>
          {
            sectionIndex === 0 ? (
              <About />
            ) : sectionIndex === 1 ? (
              <Experience />
            ) : (
              <Projects />
            )
          }
        </div>
        <div className='flex absolute bottom-2 lg:bottom-3 py-3 rounded-lg border-[1px] bg-blue-800/30'>
          <TextButton href="https://armyants.vercel.app/" label="NFT UI" />
          <TextButton href="/lars-resume.pdf" label="Download CV" download="lars-resume" />
          <TextButton href="https://github.com/LarryFisherLabs" label="Github" />
        </div>
      </main>
    </div>
  )
}
