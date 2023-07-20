import { useEffect, useState } from "react"
import { cowMaxHeights, lgCowMaxHeights, lgSbeMaxHeights, sbeMaxHeights } from "../constants/expConsts"

export const useSectionStatus = (isSbe, statusArray) => {
    const maxHeights = isSbe ? sbeMaxHeights : cowMaxHeights
    const lgMaxHeights = isSbe ? lgSbeMaxHeights : lgCowMaxHeights

    const [maxRemArray, updateMaxRemArray] = useState([maxHeights[0], lgMaxHeights[0]])

    useEffect(() => {
        let newRemCount = maxHeights[0]
        let newLgRemCount = lgMaxHeights[0]

        for (let i = 0; i < statusArray.length; i++) {
            if (statusArray[i] === true) {
                newRemCount += maxHeights[i + 1]
                newLgRemCount += lgMaxHeights[i + 1]
            }
        }
        
        const newRemArray = [newRemCount, newLgRemCount]

        updateMaxRemArray(newRemArray)
    }, statusArray)

    return maxRemArray
}