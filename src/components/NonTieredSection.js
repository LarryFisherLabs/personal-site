import { useState } from 'react'
import SectionContainer from './tailwind/SectionContainer'
import SectionHeader from './tailwind/SectionHeader'
import SectionStatus from './tailwind/SectionStatus'

/*
    sectionObject: {
        title: title of section,
        paragraphArray: array of paragraphs for section,
        maxRemHeight: number for the max height of the section in rem for a tailwind lg screen
    }
*/
export default function NonTieredSection({ sectionObject }) {
    const [isSecOpen, setIsSecOpen] = useState(false)
    const maxRemHeight = sectionObject.maxRemHeight

    return (
        <SectionContainer>
            <SectionHeader onClick={() => setIsSecOpen(!isSecOpen)}>
                {sectionObject.title}
                <SectionStatus isMainSecOpen={isSecOpen}></SectionStatus>
            </SectionHeader>
            <div 
                className={
                    'transition-all duration-1500 ease-linear origin-top overflow-hidden flex flex-col items-center ' + (
                        isSecOpen === true ? (
                            'scale-100 opacity-100 max-w-[19rem] lg:max-w-[60rem] ' + (
                                maxRemHeight > 180 ? 'max-h-small-sec11 lg:max-h-sec11' :
                                maxRemHeight > 160 ? 'max-h-small-sec10 lg:max-h-sec10' :
                                maxRemHeight > 140 ? 'max-h-small-sec9 lg:max-h-sec9' :
                                maxRemHeight > 120 ? 'max-h-small-sec8 lg:max-h-sec8' :
                                maxRemHeight > 100 ? 'max-h-small-sec7 lg:max-h-sec7' :
                                maxRemHeight > 80 ? 'max-h-small-sec6 lg:max-h-sec6' :
                                maxRemHeight > 60 ? 'max-h-small-sec5 lg:max-h-sec5' :
                                maxRemHeight > 50 ? 'max-h-small-sec4 lg:max-h-sec4' :
                                maxRemHeight > 40 ? 'max-h-small-sec3 lg:max-h-sec3' :
                                maxRemHeight > 30 ? 'max-h-small-sec2 lg:max-h-sec2' :
                                'max-h-small-sec1 lg:max-h-sec1'
                            )
                        ) : 'scale-0 opacity-0 max-w-[10rem] max-h-near-closed'
                    )
                }
            >
                {sectionObject.paragraphArray.map((paragraph, index) => {
                    const pt = index === 0 ? 'pt-1 ' : 'pt-3 lg:pt-4 '
                    return (
                        <p key={'mainParagraph' + index} className={pt + 'text-sm'}>{paragraph}</p>
                    )
                })}
            </div>
        </SectionContainer>
    )
}