import { pageContainerClasses, pageTitleClasses } from '@component/utils/constants/tailwindConsts'
import NonTieredSection from './NonTieredSection'

export default function NonTieredSectionPage({ secPageObj }) {
  return (
    <div className={pageContainerClasses}>
      <h2 className={pageTitleClasses}>{secPageObj.pageTitle}</h2>
      {
        secPageObj.secObjectsArray.map((sectionObject, index) => {
          return (
            <NonTieredSection key={'section' + index} sectionObject={sectionObject} />
          )
        })
      }
    </div>
  )
}