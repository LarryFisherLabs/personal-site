import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

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
  const [isSbeSectionOpen, toggleSbeSection] = useState(false)

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
          <div className='flex flex-col items-center pt-10 max-w-3xl'>
            <h2 className={`${inter.className} text-2xl font-semibold`}>About Me</h2>
            <div className='p-5 rounded-lg bg-purple-400/20 border-2 m-4 lg:p-7'>
              <p className='text-center'>
                My name is Lars. Ever since I learned to use Scratch in middle school I knew I wanted 
                to be a software engineer. I got my BS in electrical and computer engineering with a 
                minor in math from Northeastern University. I really enjoyed getting to learn about 
                the deeper layers to computers and how they work from hardware to assembly code like 
                MIPS.
              </p>
              <p className='pt-5 text-center'>
                I got my first software job at a small start up near my home town during covid. I was 
                in charge of QA for the entire stack. I saw this as a good opportunity to get exposure 
                to full stack software engineering by learning through testing. I got a lot of a good 
                examples of software engineering best practices and why they matter from working with 
                so much of our code base.
              </p>
              <p className='pt-5 text-center'>
                This job not only exposed me to the entire stack but also 
                got me very comfortable using javascript, kubernetes, gitlab, postman, newman, 
                selenium, zalenium, elastic search, logstash, kibana, grafana, filebeat and more.
              </p>
              <p className='pt-5 text-center'>
                For years I have been very interested in the potential of technologies like the 
                ethereum blockchain. To me it feels like the most accessible unexplored frontier of my 
                time. I love learning about ethereum and thinking about its potiential future use 
                cases.
              </p>
              <p className='pt-5 text-center'>
                By the time I had learned the basics of production level full stack engineering at my 
                first software job I felt ready for a bigger challenge. I decided building my own 
                project from the ground up would be a great way to learn about fullstack software 
                engineering.
              </p>
              <p className='pt-5 text-center'>
                I decided to build a "dapp" where people could mint their own custom nfts 
                with a few other features and more on the way. Building this project helped me feel 
                really comfotable with things like react.js with redux and styled components, next.js 
                with tailwind.css, express.js, web3.js, ethers.js, solidity, ganache and more
              </p>
              <p className='pt-5 text-center'>
                I'm a very social and kind natured person as well as a great communicator. I've always 
                been good at explaining technology and helping people understand complex concepts. I 
                love to talk with any around me about innovative ideas and technology. But even more I 
                enjoy trying to build on these innovative ideas.
              </p>
            </div>
          </div>
        ) : sectionIndex === 1 ? (
          <div className='flex flex-col items-center pt-10 max-w-3xl'>
            <h2 className={`${inter.className} text-2xl font-semibold`}>Experience</h2>
            <h2 className={`${inter.className} text-base font-semibold text-center pt-4`} onClick={() => toggleSbeSection(!isSbeSectionOpen)}>
              SBE Vision{
                isSbeSectionOpen === false ? <p className={`${inter.className} text-xs font-semibold`}>{' (open)'}</p> :
                null
              }
            </h2>
            <div className={'p-5 rounded-lg bg-purple-400/20 border-2 transition-all m-4 lg:p-7 ' + (isSbeSectionOpen === true ? 'block' : 'hidden')}>
              <p className='text-center'>
                At my first software job I got a lot of good exposure to fullstack software engineering 
                through being in charge of QA for the fullstack. I also got involved in devops, backend 
                development, and customer support.
              </p>
              <p className='pt-5 text-center'>
                We were building a software for large scale companies to build "onotolgy networks" that 
                could be integrated with one another to allow easy communication and interoperability 
                between systems. Our customers were companies like Ford, IBM, Oralce, Siemens, and many 
                more large scale major companies.
              </p>
              <p className='pt-5 text-center'>
                When I first started I took a class in kubernetes because our entire stack was deployed 
                to k8s both on a local server and in the cloud. One of my first jobs was to create my 
                own k8s cluster for end to end testing projects to be deployed on.
              </p>
              <p className='pt-5 text-center'>
                Building my own e2e testing cluster was a great learning experience for me and I 
                continued to maintain that cluster for the remainder of my time there as well as helping 
                out with other production user-facing clusters where needed.
              </p>
              <p className='pt-5 text-center'>
                My overall job was to build and maintain an automated end to end testing infrastructure 
                for our entire stack. The idea was to have automated nightly tests to ensure the 
                stability of our stack through out daily updates by our team. I was fully in charge of 
                building and maintaining these tests.
              </p>
              <p className='pt-5 text-center'>
                It was also my responsibility to find safe, free tools to build the testing stack from. 
                Throughout my year and two months at the company I tried more open source testing 
                libraries and tools than I could ever remember.
              </p>
              <p className='pt-5 text-center'>
                The e2e tests were run nightly via gitlab runners with all logs collected, aggregated 
                and visualized by a custom made ELK stack that I was also in charge of building and 
                maintaining.
              </p>
              <p className='pt-5 text-center'>
                I tried many different options to optimize the ELK stack such as grafana as a 
                substitute for kibana. In the end I had a pretty standard ELK stack with filebeat in 
                the e2e testing projects in order to forward the logs to the ELK stack.
              </p>
              <p className='pt-5 text-center'>
                I was in charge of creating and maintaining all visualizations of data in kibana not 
                only for e2e test logs but also for general logs from our other stacks. In addition to 
                this I also built and maintained the corresponding gitlab CI/CD pipelines that 
                generated most of the logs. There were the e2e testing runners but also 
              </p>
            </div>
          </div>
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
