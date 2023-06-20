import { Inter } from 'next/font/google'
import { useEffect, useState } from "react"
const inter = Inter({ subsets: ['latin'] })

// arrays for each of the x sections
const secMaxHeight = ['max-h-[60rem]']
const lgSecMaxHeight = ['max-h-[40rem]']

// arrays for x + 1 different possible max heights of overall div
const maxHeight = ['max-h-[40rem]', 'max-h-[67rem]', 'max-h-[70rem]', 'max-h-[75rem]']
const lgMaxHeight = ['lg:max-h-[30rem]', 'lg:max-h-[68rem]', 'lg:max-h-[70rem]', 'lg:max-h-[85rem]']

export default function BitcowSection() {
    const [isBitcowSectionOpen, toggleBitcowSection] = useState(false)

    const [isBackendSectionOpen, toggleBackendSection] = useState(false)
    const [isFrontendSectionOpen, toggleFrontendSection] = useState(false)
    const [isWeb3SectionOpen, toggleWeb3Section] = useState(false)

    const [maxHeightIndex, setMaxHeightIndex] = useState(0)

    useEffect(() => {
        let openSectionCount = 0
        if (isBackendSectionOpen) openSectionCount ++
        if (isFrontendSectionOpen) openSectionCount ++
        if (isWeb3SectionOpen) openSectionCount ++
        setMaxHeightIndex(openSectionCount)
    }, [isBackendSectionOpen, isFrontendSectionOpen, isWeb3SectionOpen])

    return (
        <div className='p-5 pt-2 rounded-lg bg-purple-400/20 border-2 m-2 lg:p-7 lg:pt-3'>
            <h2 className={`${inter.className} text-base font-semibold text-center`} onClick={() => toggleBitcowSection(!isBitcowSectionOpen)}>
                Bitcow Arcade
                <p className={`${inter.className} text-xs font-semibold`}>{isBitcowSectionOpen === false ? '(expand)' : '(close)'}</p>
            </h2>
            <div 
                className={
                    'transition-all duration-1000 origin-top flex flex-col items-center ' + (
                        isBitcowSectionOpen === true ? (
                            'opacity-100 scale-100 max-w-[21rem] lg:max-w-[60rem] ' + (
                                maxHeightIndex === 0 ? maxHeight[0] + ' ' + lgMaxHeight[0] : (
                                    maxHeightIndex === 1 ? maxHeight[1] + ' ' + lgMaxHeight[1] : (
                                        maxHeightIndex === 2 ? maxHeight[2] + ' ' + lgMaxHeight[2] : 
                                            maxHeight[3] + ' ' + lgMaxHeight[3]
                                    )
                                )
                            )
                        ) : 'opacity-0 scale-0 max-h-0 max-w-[8rem] lg:max-w-[13rem]'
                    )
                } 
            >
                <p className='pt-1 text-center'>
                    I became interested in blockchain technology in 2016 and quickly became obsessed with 
                    the potential of blockchains such as ethereum that combined the idea of public ledgers 
                    with smart contracts. I was in school to become an electrical/computer engineer but it 
                    became my dream to one day contribute to the “crypto” ecosystem. 
                </p>
                <p className='pt-5 text-center'>
                    I started this personal project back in 2021 to level up my software engineering 
                    abilities. I was able to leverage my personal, academic and professional coding 
                    experience to effectively teach myself to work with many technologies and tools.
                </p>
                <p className='pt-5 text-center'>
                    I learned a lot about best practices from building everything from the ground up on my 
                    own. I got good experience with solidity, react.js, next.js, express.js, ethers.js, 
                    web3.js, ganache, truffle, foundry, hardhat and more. 
                </p>

                <h2 className={`${inter.className} text-sm font-semibold text-center pt-4`} onClick={() => toggleBackendSection(!isBackendSectionOpen)}>
                    Backend
                    <p className={`${inter.className} text-xs font-semibold`}>{isBackendSectionOpen === false ? '(expand)' : '(close)'}</p>
                </h2>
                <div className={'transition-all duration-1000 origin-top ' + (isBackendSectionOpen === true ? 'opacity-100 scale-100 max-h-[30rem] max-w-[35rem]' : 'opacity-0 scale-0 max-h-0 max-w-[40rem]')} >
                    <p className='pt-1 text-center'>
                        The backend is written in js using express.js. It fetches blockchain data through 
                        an Infura api key and is hosted using Render. It is capable of generating user's 
                        digitally owned images from the variables set in the smart contract.
                    </p>
                    <p className='pt-5 text-center'>
                        The backend has end points for all the individual images of the two nft 
                        collections featured on the website for both test networks they are deployed on. 
                        There are also end points for each nfts metadata.
                    </p>
                </div>

                <h2 className={`${inter.className} text-sm font-semibold text-center pt-4`} onClick={() => toggleFrontendSection(!isFrontendSectionOpen)}>
                    Frontend
                    <p className={`${inter.className} text-xs font-semibold`}>{isFrontendSectionOpen === false ? '(expand)' : '(close)'}</p>
                </h2>
                <div className={'transition-all duration-1000 origin-top ' + (isFrontendSectionOpen === true ? 'opacity-100 scale-100 max-h-[30rem] max-w-[35rem]' : 'opacity-0 scale-0 max-h-0 max-w-[40rem]')} >
                    <p className='pt-1 text-center'>
                        For the frontend I built a react.js project using redux.js for state and hosted it 
                        on vercel. This forntend was able to get infomation from the blockchain using a 
                        user's browser wallet or from my backend. 
                    </p>
                    <p className='pt-5 text-center'>
                        The user is capable of switching between ethereum networks, redirecting to testnet 
                        faucets, minting nfts from my two contracts, viewing purchased nfts, viewing both 
                        full collections, viewing individual nfts with metadata and ability to edit the 
                        nfts state, viewing other wallets purchased nfts, and checking approval/approval 
                        for all permissions for all nfts held in a users wallet. 
                    </p>
                    <p className='pt-5 text-center'>
                        I tried to put a focus on UX with on screen directions for people with no wallet, 
                        no connected wallet, wallet connected to the wrong network, etc. I also helped UX 
                        with helpful popups to tell the user when things are going on in the background 
                        such as fetching data or making purchases. 
                    </p>
                    <p className='pt-5 text-center'>
                        The front end generally uses the user’s wallet to fetch data from the blockchain. 
                        But to allow users with no wallet/connection to get a feel for the site I made it 
                        so that all needed data could also be fetched from my express backend. 
                    </p>
                </div>

                <h2 className={`${inter.className} text-sm font-semibold text-center pt-4`} onClick={() => toggleWeb3Section(!isWeb3SectionOpen)}>
                    Web 3
                    <p className={`${inter.className} text-xs font-semibold`}>{isWeb3SectionOpen === false ? '(expand)' : '(close)'}</p>
                </h2>
                <div className={'transition-all duration-1000 origin-top ' + (isWeb3SectionOpen === true ? 'opacity-100 scale-100 max-h-[30rem] max-w-[35rem]' : 'opacity-0 scale-0 max-h-0 max-w-[40rem]')} >
                    <p className='pt-1 text-center'>
                        I wrote erc721 compliant smart contracts and built thorough testing infrastructure 
                        for them. I learned about many other eips and the evm in general. I read everything I could find about writing optimized smart contracts and did a lot of 
                        testing on things I was curious about such as compressing booleans to save gas or when 
                        to use arrays vs mappings. I made an express app to serve as the backend for my erc721 
                        tokens instead of using ipfs. 
                    </p>
                    <p className='pt-5 text-center'>
                        Something else
                    </p>
                </div>
            </div>
        </div>
    )
}