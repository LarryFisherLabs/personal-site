// arrays of max heights for each of the 5 sub sections + index 0 in units of rem
// index 0 is when all subsections are closed
export const sbeMaxHeights = [29, 44, 14, 30, 32, 16]
export const lgSbeMaxHeights = [29, 32, 10, 23, 23, 12]

// arrays of max heights for each of the 3 sub sections + index 0 in units of rem
// index 0 is when all subsections are closed
export const cowMaxHeights = [39, 22, 45, 41, 40, 31]
export const lgCowMaxHeights = [35, 16, 33, 32, 30, 27]

export const sbeObject = {
    title: 'SBE Vision',
    paragraphArray: [
        'At my first software job I got a lot of good exposure to fullstack software engineering through being in charge of QA for the fullstack. I also got involved in devops, backend development, customer support, and sales.',
        'We were building a software for large scale companies to build "onotolgy networks" that could be integrated with one another to allow easy communication and interoperability between systems.',
        'Our customers were companies like Ford, IBM, Oralce, Siemens, and many more large scale major companies. I got good experience working with and getting feedback from engineers at our customer companies.'
    ],
    subSecObjectArray: [
        {
            title: 'Responsibilities',
            subSecParagraphs: [
                'My overall job was to build and maintain an automated end to end testing infrastructure for our entire stack. The idea was to have automated nightly tests to ensure the stability of our stack through out daily updates by our team.',
                'I was fully in charge of building and maintaining all e2e tests. The tests were run nightly via gitlab runners I created with all logs collected, aggregated and visualized by a custom made ELK stack that I was also in charge of building and maintaining.',
                'It was also my responsibility to find safe, free tools to build the testing stack from. Throughout my year and two months at the company I tried more open source testing libraries and tools than I can remember.',
                'There were also many miscellaneous responsibilities I was in charge of. One was managing jira for my stack from epics to issues. I would also manage scrum when my manager was out.',
                'I participated in calls with important customers like Ford to help their engineers understand certain products or features. I also talked to them to get customer feedback on our system which I added to my own ideas when contributing to design discussions.',
                'I was also one of my companies go to resources for figuring out how to unlock the full potential of tools. Such as figuring out better and more effiecient ways to create Postman runners where different calls could share certain tests without repeating code. Something that at that time at least had no built in solution.'
            ],
            maxHeights: [sbeMaxHeights[1], lgSbeMaxHeights[1]]
        },
        {
            title: 'Kubernetes',
            subSecParagraphs: [
                'When I first started I took a class in kubernetes because our entire stack was deployed to k8s both on a local server and in the cloud. One of my first jobs was to create my own k8s cluster for end to end testing projects to be deployed on.',
                'Building my own e2e testing cluster was a great learning experience for me and I continued to maintain that cluster for the remainder of my time there as well as helping out with other production user-facing clusters where needed.'
            ],
            maxHeights: [sbeMaxHeights[2], lgSbeMaxHeights[2]]
        },
        {
            title: 'Frontend Testing',
            subSecParagraphs: [
                'I built and maintained all frontend tests as well as the gitlab runners that would run them. I had the automated nightly tests that would give full reports on everything as well as pipelines with tests for specific merges or branches.',
                'The frontend tests used Selenium to actually access our frontends and go through all happy paths for them to ensure full functionality. I also had many non happy path tests to make sure the frontends couldn\'t be broken through being used improperly.',
                'I used Zalenium to store all of the videos of these Selenium tests to trouble shoot failed tests and be able to demo successful ones. The nightly tests would generate logs on what tests passed/failed, errors that made them fail, and links to videos of the tests.',
                'The Kibana dashboard I made for tests would show a pie chart with each section being a different app in our stack with a pass and fail section for each. All logs were in a table below. You could click any section of the pie chart to limit the logs that showed up in the table.'
            ],
            maxHeights: [sbeMaxHeights[3], lgSbeMaxHeights[3]]
        },
        {
            title: 'Backend Testing',
            subSecParagraphs: [
                'I built and maintained all backend tests as well as the gitlab runners that would run them. I had the automated nightly tests that would give full reports on everything as well as pipelines with tests for specific merges or branches.',
                'I initially worked on a js project that accessed our backend APIs to test them. Over time I started writing all my backend tests in Postman. I would create runners for all our different apps that would go through each of that apps API endpoints and test proper functionality as well as security and edge case testing.',
                'I used the Postman collection runner Newman to automatically back up my test runners to Gitlab where they would be used for backend testing pipelines. I also figured out an innovative way to have full backend testing in Postman runners without repeating test code throughout requests.',
                'The Kibana dashboard I made for tests would show a pie chart with each section being a different app in our stack with a pass and fail section for each. All logs were in a table below. You could click any section of the pie chart to limit the exact logs that showed up in the table.'
            ],
            maxHeights: [sbeMaxHeights[4], lgSbeMaxHeights[4]]
        },
        {
            title: 'ELK Stack',
            subSecParagraphs: [
                'I tried many different options to optimize the ELK (Elastic search, Logstash, Kibana) stack such as grafana as a substitute for kibana. In the end I had a pretty standard ELK stack setup with filebeat in the e2e testing projects in order to forward the logs to the ELK stack.',
                'I was in charge of creating and maintaining all visualizations of data in kibana not only for e2e test logs but also for general logs from our other stacks. In addition to this I also built and maintained the corresponding gitlab CI/CD pipelines that generated these logs.'
            ],
            maxHeights: [sbeMaxHeights[5], lgSbeMaxHeights[5]]
        },
    ]
}

export const bitcowObject = {
    title: 'Larry Fisher Labs',
    paragraphArray:[
        'I became interested in blockchain technology in 2017 and quickly became obsessed with the potential of blockchains such as ethereum that combined the idea of public ledgers with smart contracts. I was in school to become an electrical/computer engineer but it became my dream to one day contribute to the “crypto” ecosystem.',
        'I started this personal project last year to level up my software engineering abilities. I was able to leverage my personal, academic and professional coding experience to effectively teach myself to work with many technologies and tools.',
        'I learned a lot about best practices by building everything from the ground up on my own. I got good experience with solidity, styled components, tailwind css, react.js, redux.js, next.js, express.js, ethers.js, web3.js, ganache, truffle, foundry, hardhat and more.'
    ],
    subSecObjectArray: [
        {
            title: 'Backend',
            subSecParagraphs: [
                'The backend is written in js using express.js. It fetches blockchain data through an Infura api key and is hosted using Render. It is capable of generating user\'s digitally owned images from the variables set in the erc721 compliant smart contracts.',
                'The backend has API end points for all the individual images of the two nft collections featured on my website for both test networks (goerli and sepolia) they are deployed on. There are also end points for each nfts metadata.',
                'This backend allowed nfts to be viewed on the frontend even if users have no access to the blockchain. The formatted output conforms to opensea standards for erc721 so tokens can be viewed on 3rd party sites.'
            ],
            maxHeights: [cowMaxHeights[1], lgCowMaxHeights[1]]
        },
        {
            title: 'Frontend',
            subSecParagraphs: [
                'For the frontend I built a react.js project using redux.js for state and hosted it on vercel. This forntend was able to get infomation from the blockchain using a user\'s browser wallet or from my backend.',
                'The user is capable of switching between ethereum networks, redirecting to testnet faucets, minting custom nfts from my two contracts, viewing purchased nfts, viewing both full collections, viewing individual nfts with metadata, ability to edit the nfts state, and viewing other wallet\'s purchased nfts.',
                'I tried to put a focus on UX with on screen directions for people with no wallet, no connected wallet, wallet connected to the wrong network, etc. I also helped UX with helpful popups to tell the user when things are going on in the background such as fetching data, making purchases, or just which network they\'re viewing data from.',
                'The front end generally uses the user\'s wallet to fetch data from the blockchain. But to allow users with no wallet/connection to get a feel for the site I made it so that all needed data could also be fetched from my express backend.',
                'I used styled components to handle all the css for the frontend. I built reusable components both styled and functional where possible.',
                'I got great frontend experience from resisting the urge to use any extra js packages. Figuring out how to make drop downs that close when the user clicks away, canvas that updates based on redux state, popups that move onto page and stack that are dismissed by clicking them or clicking away after a timer all gave me great insites into frontend design.'
            ],
            maxHeights: [cowMaxHeights[2], lgCowMaxHeights[2]]
        },
        {
            title: 'Web 3',
            subSecParagraphs: [
                'I wrote erc721 compliant smart contracts and built thorough testing infrastructure for them. I learned about many other eips and the evm in general. I read everything I could find about writing optimized smart contracts and did a lot of testing on things I was curious about such as compressing booleans to save gas or when to use arrays vs mappings.',
                'I extended OpenZeppelin\'s erc721 contract for both NFT collections. I tried several options for testing my contracts but ended up using truffles plugin for vscode once it was released.',
                'I was able to build full lifecycle tests for the smart contracts that could take the contract through several possible life cycles checking for proper function and vulnerabilities periodically throughout.',
                'Both contracts give discounts for certain token nfts that are owned. For this to be possible the ant nft contract has to be aware of the token nfts state and therefore its address which is stored as a variable. Both contracts also store my express backend url as a variable.',
                'Both contracts also allow users to generate the nfts in a customized way using user input at the time of sale. Most nft collections I had seen were much more simple having pre-made images on ipfs that all appear once the collection has sold out.',
                'I had no examples of writing the types of smart contracts I wanted to make. This made it a really good exercise for getting deeper into solidity.'
            ],
            maxHeights: [cowMaxHeights[3], lgCowMaxHeights[3]]
        },
        {
            title: 'Token NFT Contract',
            subSecParagraphs: [
                'There are five different arcade token colors: bronze, silver, gold, diamond, and the red member token. My owner wallet is able to add address\'s to enable wallets to mint one member token. Each token has the value of eth paid to mint it "engraved" into the token.',
                'Member tokens get a one time discount on another token and an ant nft. All other tokens get a one time discount on just an ant nft. The largest discount is for members getting smaller for each lower color.',
                'Each of the non-member tokens has a base price in ethereum: bronze: 0.001, silver: 0.002, gold: 0.003, diamond: 0.004. Everytime 9 tokens of any kind are minted each colors price goes up by 0.001 eth. Everytime 4 tokens of one color are minted that colors price increases by its base price.',
                'I thought this would be an interesting experiment because I plan to release new collections over time and build unique pvp on chain games for each. All future possible collections will have a one time discount for each tokens just like the ants.',
                'If the overall project grows in popularity tokens will have a greater value for the discounts they provide. At the same time token prices will be increasing as more get minted.',
                'If the project grows it will be interesitng to see if token color\'s prices grow linearly and what the final count of each color will be.'
            ],
            maxHeights: [cowMaxHeights[4], lgCowMaxHeights[4]]
        },
        {
            title: 'Ant NFT Contract',
            subSecParagraphs: [
                'The Army Ant NFTs have 15 different sections of customization. Some of the sections like the legs and antennas have a default option but the majority default to empty.',
                'Each possible trait for each section has one of five rarities: base, very common, common, rare, and very rare. Each ant has the same base price with its total mint price increasing based on chosen traits.',
                'Base rarity traits add no extra cost with each increasing rarity adding slightly more cost. There can be a total of 10,000 ants with no limits to common rarities and lower. However rare and very rare traits have a count limit to enforce their rarity.',
                'If successful this project will be an interesting experiment to see how trait counts increase based on public opinion and set price. It\'s possible the collection could sell out without ever using certain traits. The final state of the collection will depend on users choices.',
                'Each token nft allows for a one time discount on an ant based on the tokens color. The ant contract stores a boolean for each token on whether it\'s discount is used. Ant contract also calls the token contract to make sure it is used by the correct owner.'
            ],
            maxHeights: [cowMaxHeights[5], lgCowMaxHeights[5]]
        }
    ]
}

export const expPageObject = {
    pageTitle: 'Experience',
    sectionObjectArray: [sbeObject, bitcowObject]
}