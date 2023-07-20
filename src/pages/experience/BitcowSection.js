import { shallowEqual, useSelector } from "react-redux"
import Section from "@component/components/Section"
import { selectBitcowStatusArray } from "@component/redux/slices/experienceSlice"

export default function BitcowSection() {
    const bitcowStatusArray = useSelector(selectBitcowStatusArray, shallowEqual)

    return (
        <Section subSecStatArray={bitcowStatusArray} isSbe={false} />
    )
}