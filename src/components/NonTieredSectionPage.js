import NonTieredSection from './NonTieredSection'

export default function NonTieredSectionPage({ secPageObj }) {
  return (
    <div className='flex flex-col items-center pt-4 lg:pt-10 max-w-3xl'>
      <h2 className={'text-2xl lg:text-3xl font-semibold'}>{secPageObj.pageTitle}</h2>
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