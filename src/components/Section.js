import { toggleSecStatusArray } from '@component/utils/general/sectionFuncs'
import { useSectionStatus } from '@component/utils/hooks/useSectionStatus'
import { useState } from 'react'
import SectionContainer from './tailwind/SectionContainer'
import SectionHeader from './tailwind/SectionHeader'
import SectionStatus from './tailwind/SectionStatus'
import ImageFromWeb from './tailwind/ImageFromWeb'

/*
    imgObj: {
        imgUrl: url for image,
        alt: string to be displayed in absence of image
    }

    preTxtImgObj: {
        imgObjArray: array of imgObjs for displaying images before text see above,
        description: description of images to be shown below
    }

    subSecObject : {
        title: title of sub-section,
        preTxtImgObj: optional for displaying images before text see above
        subSecParagraphs: array of paragraph strings for sub-section
    }

    sectionObj: {
        title: title of section,
        subTitles: sub-title of section,
        subSecMaxHeights: array of max heights in rem for each subsection with the first elemnt being
            the max height of open section with all sub-sections closed,
        paragraphArray: array of paragraph strings that come before sub-sections,
        subSecObjectArray: array of subSecObjects see above
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
                {
                    sectionObj.subTitles.map((subTitle, index) => {
                        return (
                            <div key={sectionObj.title + '-subTitle-' + index} className={index === 0 ? 'text-sm lg:text-base' : 'text-xs lg:text-sm'}>
                                {subTitle}
                            </div>
                        )
                    })
                }
                <SectionStatus isMainSecOpen={isMainSecOpen}></SectionStatus>
            </SectionHeader>
            <div 
                className={
                    'transition-all duration-1500 ease-linear origin-top overflow-hidden flex flex-col items-center ' + (
                        isMainSecOpen === true ? (
                            'scale-100 opacity-100 max-w-[19rem] lg:max-w-[41.25rem] ' + (
                                secLgMaxHeight > 220 ? 'max-h-small-sec13 lg:max-h-sec13' :
                                secLgMaxHeight > 200 ? 'max-h-small-sec12 lg:max-h-sec12' :
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
                        <h2 key={titleKey} className={'text-xs lg:text-sm font-semibold pt-2 lg:pt-4 lg:hover:opacity-70 hover:cursor-pointer active:opacity-50'} onClick={() => toggleSubSec(index)}>
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
                            {!subSecObj.hasOwnProperty('preTxtImgObj') ? null : (
                                <div key={'subSec-' + subSecObj.title + '-imgSec'}>
                                    <div className='pt-1 lg:pt-2 flex flex-row flex-nowrap justify-center gap-x-0.5'>{
                                        subSecObj.preTxtImgObj.imgObjArray.map((imgObj, imgIndex) => {
                                            return (
                                                <a key={subSecObj.title + '-image-' + imgIndex} href={imgObj.imgUrl} target="_blank">
                                                    <ImageFromWeb imgUrl={imgObj.imgUrl} imgAlt={imgObj.alt} />
                                                </a>
                                            )
                                        })
                                    }</div>
                                    <p className={'pt-1 lg:pt-2 text-xs lg:text-sm'}>{subSecObj.preTxtImgObj.description}</p>
                                </div>
                            )}
                            {subSecObj.subSecParagraphs.map((paragraph, paragraphIndex) => {
                                const paraKey = `${subSecObj.title}SubSec${index.toString()}P${paragraphIndex.toString()}`
                                const pt = (paragraphIndex === 0 && !subSecObj.hasOwnProperty('preTxtImgObj')) ? 'pt-1' : 'pt-2 lg:pt-3'
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