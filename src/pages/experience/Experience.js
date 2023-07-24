import Section from '@component/components/Section'
import { expPageObject } from '@component/utils/constants/expConsts'
import { pageContainerClasses, pageTitleClasses } from '@component/utils/constants/tailwindConsts'

export default function Experience() {
  return (
    <div className={pageContainerClasses}>
      <h2 className={pageTitleClasses}>Experience</h2>
      {
        expPageObject.sectionObjectArray.map((sectionObject, sectionIndex) => {
          return (
            <Section key={'exp-sec-' + sectionIndex} sectionObj={sectionObject} />
          )
        })
      }      
    </div>
  )
}