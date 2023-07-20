import { shallowEqual, useSelector } from "react-redux"
import { selectSbeStatusArray } from "@component/redux/slices/experienceSlice"
import Section from "@component/components/Section"

export default function SbeSection() {
    const sbeStatusArray = useSelector(selectSbeStatusArray, shallowEqual)

    return (
        <Section subSecStatArray={sbeStatusArray} isSbe={true} />
    )
}