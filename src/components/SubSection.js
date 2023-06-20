// title is the header of the section as a string
// maxHeightArray is the max height of the sub-section for both mobile[0] and lg[1]

// TODO: get redux package and create state for updating status of sections and subsections
export default function SubSection({ title, maxHeightArray, parentMaxHeight, updateParentMaxH, paragraphArray }) {
    const [isSubSectionOpen, toggleSubSection] = useState(false)

    const titleClick = () => {
        if (isSubSectionOpen === false) toggleSubSection(true)
        else toggleSubSection(false)
    }

    return (
        <div>
            <h2 className={`text-sm font-semibold text-center pt-4`} onClick={titleClick}>
                {title}
                <p className={`text-xs`}>{isSubSectionOpen === false ? '(expand)' : '(close)'}</p>
            </h2>
            <div 
                className={
                    'transition-all duration-1000 origin-top ' + (
                        isSubSectionOpen === true ? (
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
    )
}