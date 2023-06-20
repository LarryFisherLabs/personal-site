import { useEffect, useState } from "react"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// arrays for each of the five sections
const secMaxHeight = ['max-h-[50rem]', 'max-h-[20rem]', 'max-h-[30rem]', 'max-h-[45rem]', 'max-h-[45rem]', 'max-h-[20rem]']
const lgSecMaxHeight = ['max-h-[40rem]', 'max-h-[15rem]', 'max-h-[25rem]', 'max-h-[30rem]', 'max-h-[30rem]', 'max-h-[15rem]']

// arrays for six different possible max heights of overall div
const maxHeight = ['max-h-[40rem]', 'max-h-[110rem]', 'max-h-[140rem]', 'max-h-[180rem]', 'max-h-[195rem]', 'max-h-[210rem]', 'max-h-[230rem]']
const lgMaxHeight = ['lg:max-h-[29rem]', 'lg:max-h-[68rem]', 'lg:max-h-[97rem]', 'lg:max-h-[127rem]', 'lg:max-h-[147rem]', 'lg:max-h-[167rem]', 'lg:max-h-[187rem]']

export default function SbeSection() {
    const [isSbeSectionOpen, toggleSbeSection] = useState(false)

    const [isDutySectionOpen, toggleDutySection] = useState(false)
    const [isK8sSectionOpen, toggleK8sSection] = useState(false)
    const [isTestingSectionOpen, toggleTestingSection] = useState(false)
    const [isFrontendSectionOpen, toggleFrontendSection] = useState(false)
    const [isBackendSectionOpen, toggleBackendSection] = useState(false)
    const [isElkSectionOpen, toggleElkSection] = useState(false)
    
    const [maxHeightIndex, setMaxHeightIndex] = useState(0)

    useEffect(() => {
        let openSectionCount = 0
        if (isDutySectionOpen) openSectionCount ++
        if (isK8sSectionOpen) openSectionCount ++
        if (isFrontendSectionOpen) openSectionCount ++
        if (isBackendSectionOpen) openSectionCount ++
        if (isElkSectionOpen) openSectionCount ++
        setMaxHeightIndex(openSectionCount)
    }, [isDutySectionOpen, isK8sSectionOpen, isFrontendSectionOpen, isBackendSectionOpen, isElkSectionOpen])

    return (
        <div className='p-5 pt-2 rounded-lg bg-purple-400/20 border-2 m-2 lg:p-7 lg:pt-3'>
            <h2 className={`${inter.className} text-base font-semibold text-center`} onClick={() => toggleSbeSection(!isSbeSectionOpen)}>
                SBE Vision
                <p className={`${inter.className} text-xs font-semibold`}>{isSbeSectionOpen === false ? '(expand)' : '(close)'}</p>
            </h2>
            <div 
                className={
                    'transition-all duration-1000 origin-top flex flex-col items-center ' + (
                        isSbeSectionOpen === true ? (
                            'opacity-100 scale-100 max-w-[21rem] lg:max-w-[60rem] ' + (
                                maxHeightIndex === 0 ? maxHeight[0] + ' ' + lgMaxHeight[0] : (
                                    maxHeightIndex === 1 ? maxHeight[1] + ' ' + lgMaxHeight[1] : (
                                        maxHeightIndex === 2 ? maxHeight[2] + ' ' + lgMaxHeight[2] : (
                                            maxHeightIndex === 3 ? maxHeight[3] + ' ' + lgMaxHeight[3] : (
                                                maxHeightIndex === 4 ? maxHeight[4] + ' ' + lgMaxHeight[4] : 
                                                    maxHeight[5] + ' ' + lgMaxHeight[5]
                                            )
                                        )
                                    )
                                )
                            )
                        ) : 'opacity-0 scale-0 max-h-0 max-w-[8rem] lg:max-w-[13rem]'
                    )
                }
            >
                <p className='pt-1 text-center'>
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
                <h2 className={`${inter.className} text-sm font-semibold text-center pt-4`} onClick={() => toggleDutySection(!isDutySectionOpen)}>
                    Responsibilities
                    <p className={`${inter.className} text-xs font-semibold`}>{isDutySectionOpen === false ? '(expand)' : '(close)'}</p>
                </h2>
                <div 
                    className={
                        'transition-all duration-1000 origin-top ' + (
                            isDutySectionOpen === true ? (
                                'opacity-100 scale-100 max-w-[35rem] ' + secMaxHeight[0] + ' lg:' + lgSecMaxHeight[0]
                            ) : 'opacity-0 scale-0 max-h-0 max-w-[40rem]'
                        )
                    } 
                >
                    <p className='pt-1 text-center'>
                        My overall job was to build and maintain an automated end to end testing infrastructure 
                        for our entire stack. The idea was to have automated nightly tests to ensure the 
                        stability of our stack through out daily updates by our team. I was fully in charge of 
                        building and maintaining these tests.
                    </p>
                    <p className='pt-5 text-center'>
                        It was also my responsibility to find safe, free tools to build the testing stack from. 
                        Throughout my year and two months at the company I tried more open source testing 
                        libraries and tools than I can remember.
                    </p>
                    <p className='pt-5 text-center'>
                        The e2e tests I built and maintained were run nightly via gitlab runners I created with 
                        all logs collected, aggregated and visualized by a custom made ELK stack that I was also 
                        in charge of building and maintaining.
                    </p>
                    <p className='pt-5 text-center'>
                        There were also many miscellaneous responsibilities I was in charge of. One was managing 
                        jira for my stack from epics to issues. I would also manage scrum when my manager was 
                        out.
                    </p>
                    <p className='pt-5 text-center'>
                        I participated in calls with important customers like Ford to help their engineers 
                        understand certain products or features. I also talked to them to get customer feedback 
                        on our system which I added to my own ideas when contributing to design discussions.
                    </p>
                    <p className='pt-5 text-center'>
                        I was also one of my companies go to resources for figuring out how to unlock the full 
                        potential of tools. Such as figuring out better and more effiecient ways to create 
                        Postman runners where different calls could share certain tests without repeating code. 
                        Something that at that time at least had no built in solution.
                    </p>
                </div>
                <h2 className={`${inter.className} text-sm font-semibold text-center pt-4`} onClick={() => toggleK8sSection(!isK8sSectionOpen)}>
                    Kubernetes
                    <p className={`${inter.className} text-xs font-semibold`}>{isK8sSectionOpen === false ? '(expand)' : '(close)'}</p>
                </h2>
                <div 
                    className={
                        'transition-all duration-1000 origin-top ' + (
                            isK8sSectionOpen === true ? (
                                'opacity-100 scale-100 max-w-[35rem] ' + secMaxHeight[1] + ' lg:' + lgSecMaxHeight[1]
                            ) : 'opacity-0 scale-0 max-h-0 max-w-[40rem]'
                        )
                    } 
                >
                    <p className='pt-1 text-center'>
                        When I first started I took a class in kubernetes because our entire stack was deployed 
                        to k8s both on a local server and in the cloud. One of my first jobs was to create my 
                        own k8s cluster for end to end testing projects to be deployed on.
                    </p>
                    <p className='pt-5 text-center'>
                        Building my own e2e testing cluster was a great learning experience for me and I 
                        continued to maintain that cluster for the remainder of my time there as well as helping 
                        out with other production user-facing clusters where needed.
                    </p>
                </div>
                <h2 className={`${inter.className} text-sm font-semibold text-center pt-4`} onClick={() => toggleFrontendSection(!isFrontendSectionOpen)}>
                    Frontend Testing
                    <p className={`${inter.className} text-xs font-semibold`}>{isFrontendSectionOpen === false ? '(expand)' : '(close)'}</p>
                </h2>
                <div 
                    className={
                        'transition-all duration-1000 origin-top ' + (
                            isFrontendSectionOpen === true ? (
                                'opacity-100 scale-100 max-w-[35rem] ' + secMaxHeight[2] + ' lg:' + lgSecMaxHeight[2]
                            ) : 'opacity-0 scale-0 max-h-0 max-w-[40rem]'
                        )
                    } 
                >
                    <p className='pt-1 text-center'>
                        I built and maintained all frontend tests as well as the gitlab runners that would run 
                        them. I had the automated nightly tests that would give full reports on everything as 
                        well as pipelines with tests for specific merges or branches.
                    </p>
                    <p className='pt-5 text-center'>
                        The frontend tests used Selenium to actually access our frontends and go through all 
                        happy paths for them to ensure full functionality. I also had many non happy path 
                        tests to make sure the frontends couldn't be broken through being used improperly.
                    </p>
                    <p className='pt-5 text-center'>
                        I used Zalenium to store all of these Selenium tests so that if any failed the 
                        video that led up to the error would be stored. The nightly tests would generate 
                        logs on what tests passed/failed, errors that made them fail, and links to videos of 
                        failed tests.
                    </p>
                    <p className='pt-5 text-center'>
                        The Kibana dashboard I made for tests would show a pie chart with each section being 
                        a different app in our stack with a pass and fail section for each. All logs were in 
                        a table below. You could click any section of the pie chart to limit the logs 
                        that showed up in the table.
                    </p>
                </div>
                <h2 className={`${inter.className} text-sm font-semibold text-center pt-4`} onClick={() => toggleBackendSection(!isBackendSectionOpen)}>
                    Backend Testing
                    <p className={`${inter.className} text-xs font-semibold`}>{isBackendSectionOpen === false ? '(expand)' : '(close)'}</p>
                </h2>
                <div 
                    className={
                        'transition-all duration-1000 origin-top ' + (
                            isBackendSectionOpen === true ? (
                                'opacity-100 scale-100 max-w-[35rem] ' + secMaxHeight[3] + ' lg:' + lgSecMaxHeight[3]
                            ) : 'opacity-0 scale-0 max-h-0 max-w-[40rem]'
                        )
                    } 
                >
                    <p className='pt-1 text-center'>
                        I built and maintained all backend tests as well as the gitlab runners that would run 
                        them. I had the automated nightly tests that would give full reports on everything as 
                        well as pipelines with tests for specific merges or branches. 
                    </p>
                    <p className='pt-5 text-center'>
                        I initially worked on a js project that accessed our backend APIs to test them. Over 
                        time I started writing all my backend tests in Postman. I would create runners for all 
                        our different apps that would go through each of that apps API endpoints and test 
                        proper functionality as well as security and edge case testing.
                    </p>
                    <p className='pt-5 text-center'>
                        I used the Postman collection runner Newman to automatically back up my test runners 
                        to Gitlab where they would be used for backend testing pipelines. I also figured out 
                        an innovative way to have full backend testing in Postman runners without repeating 
                        test code throughout requests.
                    </p>
                    <p className='pt-5 text-center'>
                        The Kibana dashboard I made for tests would show a pie chart with each section being 
                        a different app in our stack with a pass and fail section for each. All logs were in 
                        a table below. You could click any section of the pie chart to limit the exact logs 
                        that showed up in the table.
                    </p>
                </div>
                <h2 className={`${inter.className} text-sm font-semibold text-center pt-4`} onClick={() => toggleElkSection(!isElkSectionOpen)}>
                    ELK Stack
                    <p className={`${inter.className} text-xs font-semibold`}>{isElkSectionOpen === false ? '(expand)' : '(close)'}</p>
                </h2>
                <div 
                    className={
                        'transition-all duration-1000 origin-top ' + (
                            isElkSectionOpen === true ? (
                                'opacity-100 scale-100 max-w-[35rem] ' + secMaxHeight[4] + ' lg:' + lgSecMaxHeight[4]
                            ) : 'opacity-0 scale-0 max-h-0 max-w-[40rem]'
                        )
                    } 
                >
                    <p className='pt-1 text-center'>
                        I tried many different options to optimize the ELK stack such as grafana as a 
                        substitute for kibana. In the end I had a pretty standard ELK stack with filebeat in 
                        the e2e testing projects in order to forward the logs to the ELK stack.
                    </p>
                    <p className='pt-5 text-center'>
                        I was in charge of creating and maintaining all visualizations of data in kibana not 
                        only for e2e test logs but also for general logs from our other stacks. In addition to 
                        this I also built and maintained the corresponding gitlab CI/CD pipelines that 
                        generated most of the logs.
                    </p>
                </div>
            </div>
        </div>
    )
}