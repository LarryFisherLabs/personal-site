import Section from '@component/components/Section'
import PageContainer from '@component/components/tailwind/PageContainer'
import PageTitle from '@component/components/tailwind/PageTitle'
import { expPageObject } from '@component/utils/constants/expConsts'

export default function Experience() {
  return (
    <PageContainer>
      <PageTitle>Experience</PageTitle>
      {
        expPageObject.sectionObjectArray.map((sectionObject, sectionIndex) => {
          return (
            <Section key={'exp-sec-' + sectionIndex} sectionObj={sectionObject} />
          )
        })
      }      
    </PageContainer>
  )
}