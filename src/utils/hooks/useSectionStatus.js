import { useEffect, useState } from "react"

export const useSectionStatus = (lgMaxHeights, statusArray) => {

    const [lgMaxRem, setLgMaxRem] = useState(lgMaxHeights[0])

    useEffect(() => {
        let newLgRemCount = lgMaxHeights[0]

        for (let i = 0; i < statusArray.length; i++) {
            if (statusArray[i] === true) {
                newLgRemCount += lgMaxHeights[i + 1]
            }
        }
        
        setLgMaxRem(newLgRemCount)
    }, [statusArray, lgMaxHeights])

    return lgMaxRem
}