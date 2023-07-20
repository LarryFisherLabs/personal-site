// leave updatedIndex null to reset array to all false values
export const toggleSecStatusArray = (oldStatusArray, updatedIndex = null) => {
    const newStatusArray = []
    for (let i = 0; i < oldStatusArray.length; i ++) {
        if (Number.isInteger(updatedIndex)) {
            const status = (i === updatedIndex) ? !(oldStatusArray[i]) : oldStatusArray[i]
            newStatusArray.push(status)
        } else if (updatedIndex === null) newStatusArray.push(false)
    }
    return newStatusArray
}

// heights in units of rem should be passed as integers in array like this: [maxHeight, lgMaxHeight]
export const createMaxHeightStrings = (heightInRemArray) => {
    return [`max-h-[${heightInRemArray[0]}rem]`, `lg:max-h-[${heightInRemArray[1]}rem]`]
}