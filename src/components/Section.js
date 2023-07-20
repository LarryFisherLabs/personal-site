import { updateBitcowStatusArray, updateSbeStatusArray } from '@component/redux/slices/experienceSlice'
import { bitcowObject, sbeObject } from '@component/utils/constants/expConsts'
import { toggleSecStatusArray } from '@component/utils/general/sectionFuncs'
import { useSectionStatus } from '@component/utils/hooks/useSectionStatus'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

/*
    title: title of section,
    subSecStatusArray: whether each sub section is open(true) or closed(false),
    secMaxHeights: [normalMaxHeightString('max-h-[xrem]'), lgMaxHeightString('lg:max-h-[xrem]')],
    paragraphArray = paragraphs to come before sub sections
    subSecObject = {
        title,
        paragraphArray,
        maxHeights(same two string formats as max heights above)
    }
*/
export default function Section({ subSecStatArray, isSbe }) {
    const dispatch = useDispatch()
    const expObject = isSbe ? sbeObject : bitcowObject
    const [isMainSecOpen, setMainSecStatus] = useState(false)
    const secMaxHeights = useSectionStatus(isSbe, subSecStatArray)

    const toggleMainSection = () => {
        if (isMainSecOpen === true) {
            const defaultStatusArray = toggleSecStatusArray(subSecStatArray)
            if (isSbe) dispatch(updateSbeStatusArray({ newStatusArray: defaultStatusArray }))
            else dispatch(updateBitcowStatusArray({ newStatusArray: defaultStatusArray }))
            setMainSecStatus(false)
        } else setMainSecStatus(true)
    }

    const toggleSubSec = (sectionIndex) => {
        const newStatusArray = toggleSecStatusArray(subSecStatArray, sectionIndex)
        if (isSbe) dispatch(updateSbeStatusArray({ newStatusArray: newStatusArray }))
        else dispatch(updateBitcowStatusArray({ newStatusArray: newStatusArray }))
    }

    return (
        <div className='text-sm lg:text-base px-5 py-2 rounded-lg bg-purple-400/20 border-2 m-2 text-center lg:px-11 lg:py-3'>
            <h2 className={'text-lg lg:text-xl font-semibold'} onClick={toggleMainSection}>
                {expObject.title}
                <p className={'text-2xs lg:text-xs'}>{isMainSecOpen === false ? '(expand)' : '(close)'}</p>
            </h2>
            <div 
                className={
                    'transition-all duration-1500 ease-linear origin-top overflow-hidden flex flex-col items-center ' + (
                        isMainSecOpen === true ? (
                            'scale-100 opacity-100 max-w-[19rem] lg:max-w-[60rem] ' + (
                                secMaxHeights[1] > 180 ? 'max-h-small-sec11 lg:max-h-sec11' :
                                secMaxHeights[1] > 160 ? 'max-h-small-sec10 lg:max-h-sec10' :
                                secMaxHeights[1] > 140 ? 'max-h-small-sec9 lg:max-h-sec9' :
                                secMaxHeights[1] > 120 ? 'max-h-small-sec8 lg:max-h-sec8' :
                                secMaxHeights[1] > 100 ? 'max-h-small-sec7 lg:max-h-sec7' :
                                secMaxHeights[1] > 80 ? 'max-h-small-sec6 lg:max-h-sec6' :
                                secMaxHeights[1] > 60 ? 'max-h-small-sec5 lg:max-h-sec5' :
                                secMaxHeights[1] > 50 ? 'max-h-small-sec4 lg:max-h-sec4' :
                                secMaxHeights[1] > 40 ? 'max-h-small-sec3 lg:max-h-sec3' :
                                secMaxHeights[1] > 30 ? 'max-h-small-sec2 lg:max-h-sec2' :
                                'max-h-small-sec1 lg:max-h-sec1'
                            )
                        ) : 'scale-0 opacity-0 max-w-[10rem] max-h-near-closed'
                    )
                }
            >
                {expObject.paragraphArray.map((element, index) => {
                    const pt = index === 0 ? 'pt-1' : 'pt-3 lg:pt-4'
                    return (
                        <p key={'mainParagraph' + index} className={pt}>{element}</p>
                    )
                })}
                {expObject.subSecObjectArray.map((element, index) => {
                    const titleKey = `subSec${index.toString() + element.title}`
                    const contentKey = `subSecPs${index.toString() + element.title}`
                    const header = (
                        <h2 key={titleKey} className={'text-xs lg:text-sm font-semibold pt-2 lg:pt-4'} onClick={() => toggleSubSec(index)}>
                            {element.title}
                            <p className={'text-2xs lg:text-xs'}>{subSecStatArray[index] === false ? '(expand)' : '(close)'}</p>
                        </h2>
                    )
                    const text = (
                        <div key={contentKey}
                            className={
                                'transition-all duration-1000 ease-linear origin-top overflow-hidden flex flex-col items-center ' + (
                                    subSecStatArray[index] === true ? (
                                        'scale-100 opacity-100 max-w-[15rem] lg:max-w-[33rem] ' + (
                                            element.maxHeights[1] > 60 ? 'max-h-small-sec5 lg:max-h-sec5' :
                                            element.maxHeights[1] > 50 ? 'max-h-small-sec4 lg:max-h-sec4' :
                                            element.maxHeights[1] > 40 ? 'max-h-small-sec3 lg:max-h-sec3' :
                                            element.maxHeights[1] > 30 ? 'max-h-small-sec2 lg:max-h-sec2' :
                                            'max-h-small-sec1 lg:max-h-sec1'
                                        )
                                    ) : 'scale-0 opacity-0 max-w-[10rem] max-h-closed'
                                )
                            }
                        >
                            {element.subSecParagraphs.map((paragraph, paragraphIndex) => {
                                const paraKey = `${isSbe ? 'sbe' : 'bitcow'}SubSec${index.toString()}P${paragraphIndex.toString()}`
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
        </div>
    )
}