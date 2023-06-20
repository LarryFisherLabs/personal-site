import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
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
    )
}