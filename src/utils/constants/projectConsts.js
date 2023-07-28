export const projectPageObject = {
    pageTitle: 'Projects',
    secObjectsArray: [
        {
            title: 'Personal Website',
            paragraphArray: [
                'I built this website using next.js with tailwind css for styling. I already had a lot of experience with react.js and styled components so it was nice to get to try out some of their alternatives.',
                'It was a good challenge for me to get the sections in the experience tab to resize properly without any additional js packages. The added complexity of the sub sections exposed me to more experimentation with tailwind.',
                'I styled the site to be responsive to screen size. I found tailwind to be muich easier for changing style based on screen size but I think overall I still preferred styled components.',
                'I decided to name this website after the entity that I have released all my code under. Once blockchains like ethereum reach the point where they can support fun, fully on chain, pvp games I hope to keep building this brand in my personal time.',
                'I experimented with next.js\'s api capabilities to possibly replace my nft express backend. I decided to keep things as they are for now but felt the experience would serve me well later on.'
            ],
            maxRemHeight: 21
        },
        {
            title: 'Approval Manager',
            paragraphArray: [
                'This is the first tool I made for my other website. I have started working on several more blockchain related tools and have plans for even more long term. I wanted to add the prototype for this one as it was a more simple idea.',
                'This tool can identify all active approvals that you\'ve granted for third party smart contracts for both erc721 and erc20 tokens. It then gives you lists of active approvals with their details and a button for revoking them.'
            ],
            maxRemHeight: 10
        }
    ]
}