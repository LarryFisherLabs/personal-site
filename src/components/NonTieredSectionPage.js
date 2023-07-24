import NonTieredSection from './NonTieredSection'
import PageContainer from './tailwind/PageContainer'
import PageTitle from './tailwind/PageTitle'

export default function NonTieredSectionPage({ secPageObj }) {
  return (
    <PageContainer>
      <PageTitle>{secPageObj.pageTitle}</PageTitle>
      {
        secPageObj.secObjectsArray.map((sectionObject, index) => {
          return (
            <NonTieredSection key={'section' + index} sectionObject={sectionObject} />
          )
        })
      }
    </PageContainer>
  )
}