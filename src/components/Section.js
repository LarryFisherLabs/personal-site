import { toggleSecStatusArray } from '@component/utils/general/sectionFuncs'
import { useSectionStatus } from '@component/utils/hooks/useSectionStatus'
import { useState } from 'react'
import SectionContainer from './tailwind/SectionContainer'
import SectionHeader from './tailwind/SectionHeader'
import SectionStatus from './tailwind/SectionStatus'

/*
    subSecObject : {
        title: title of sub-section,
        subSecParagraphs: array of paragraph strings for sub-section
    }

    sectionObj: {
        title: title of section,
        subTitles: sub-title of section,
        subSecMaxHeights: array of max heights in rem for each subsection with the first elemnt being
            the max height of open section with all sub-sections closed,
        paragraphArray: array of paragraph strings that come before sub-sections,
        subSecObjectArray: array of subSecObjects
    }
*/
export default function Section({ sectionObj }) {
    const subSecMaxHeights = sectionObj.subSecMaxHeights
    const [isMainSecOpen, setMainSecStatus] = useState(false)
    const [subSecStatArray, setSubSecStatArray] = useState(sectionObj.subSecObjectArray.map(() => false))
    const secLgMaxHeight = useSectionStatus(subSecMaxHeights, subSecStatArray)

    const toggleMainSection = () => {
        if (isMainSecOpen === true) {
            const defaultStatusArray = toggleSecStatusArray(subSecStatArray)
            setSubSecStatArray(defaultStatusArray)
            setMainSecStatus(false)
        } else setMainSecStatus(true)
    }

    const toggleSubSec = (sectionIndex) => {
        const newStatusArray = toggleSecStatusArray(subSecStatArray, sectionIndex)
        setSubSecStatArray(newStatusArray)
    }

    return (
        <SectionContainer>
            <SectionHeader onClick={toggleMainSection}>
                {sectionObj.title}
                <SectionStatus isMainSecOpen={isMainSecOpen}></SectionStatus>
            </SectionHeader>
            <div 
                className={
                    'transition-all duration-1500 ease-linear origin-top overflow-hidden flex flex-col items-center ' + (
                        isMainSecOpen === true ? (
                            'scale-100 opacity-100 max-w-[19rem] lg:max-w-[41.25rem] ' + (
                                secLgMaxHeight > 180 ? 'max-h-small-sec11 lg:max-h-sec11' :
                                secLgMaxHeight > 160 ? 'max-h-small-sec10 lg:max-h-sec10' :
                                secLgMaxHeight > 140 ? 'max-h-small-sec9 lg:max-h-sec9' :
                                secLgMaxHeight > 120 ? 'max-h-small-sec8 lg:max-h-sec8' :
                                secLgMaxHeight > 100 ? 'max-h-small-sec7 lg:max-h-sec7' :
                                secLgMaxHeight > 80 ? 'max-h-small-sec6 lg:max-h-sec6' :
                                secLgMaxHeight > 60 ? 'max-h-small-sec5 lg:max-h-sec5' :
                                secLgMaxHeight > 50 ? 'max-h-small-sec4 lg:max-h-sec4' :
                                secLgMaxHeight > 40 ? 'max-h-small-sec3 lg:max-h-sec3' :
                                secLgMaxHeight > 30 ? 'max-h-small-sec2 lg:max-h-sec2' :
                                'max-h-small-sec1 lg:max-h-sec1'
                            )
                        ) : 'scale-0 opacity-0 max-w-[10rem] max-h-near-closed'
                    )
                }
            >
                {sectionObj.paragraphArray.map((paragraphString, index) => {
                    const pt = index === 0 ? 'pt-1' : 'pt-3 lg:pt-4'
                    return (
                        <p key={'mainParagraph' + index} className={pt}>{paragraphString}</p>
                    )
                })}
                {sectionObj.subSecObjectArray.map((subSecObj, index) => {
                    const titleKey = `subSec${index.toString() + subSecObj.title}`
                    const contentKey = `subSecPs${index.toString() + subSecObj.title}`
                    const header = (
                        <h2 key={titleKey} className={'text-xs lg:text-sm font-semibold pt-2 lg:pt-4 hover:opacity-70 hover:cursor-pointer lg:active:opacity-50'} onClick={() => toggleSubSec(index)}>
                            {subSecObj.title}
                            <p className={'text-2xs lg:text-xs'}>{subSecStatArray[index] === false ? '(expand)' : '(close)'}</p>
                        </h2>
                    )
                    const text = (
                        <div key={contentKey}
                            className={
                                'transition-all duration-1000 ease-linear origin-top overflow-hidden flex flex-col items-center ' + (
                                    subSecStatArray[index] === true ? (
                                        'scale-100 opacity-100 max-w-[15rem] lg:max-w-[33rem] ' + (
                                            subSecMaxHeights[(index + 1)] > 60 ? 'max-h-small-sec5 lg:max-h-sec5' :
                                            subSecMaxHeights[(index + 1)] > 50 ? 'max-h-small-sec4 lg:max-h-sec4' :
                                            subSecMaxHeights[(index + 1)] > 40 ? 'max-h-small-sec3 lg:max-h-sec3' :
                                            subSecMaxHeights[(index + 1)] > 30 ? 'max-h-small-sec2 lg:max-h-sec2' :
                                            'max-h-small-sec1 lg:max-h-sec1'
                                        )
                                    ) : 'scale-0 opacity-0 max-w-[10rem] max-h-closed'
                                )
                            }
                        >
                            {subSecObj.subSecParagraphs.map((paragraph, paragraphIndex) => {
                                const paraKey = `${subSecObj.title}SubSec${index.toString()}P${paragraphIndex.toString()}`
                                const pt = paragraphIndex === 0 ? 'pt-1' : 'pt-2 lg:pt-3'
                                return (
                                    <p key={paraKey} className={'text-xs lg:text-sm ' + pt}>{paragraph}</p>
                                )
                            })}
                        </div>
                    )
                    return [header, text]
                })}
            </div>
        </SectionContainer>
    )
}