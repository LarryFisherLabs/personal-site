export default function PageContainer({children}) {
    return (
        <div className='flex flex-col items-center pt-2 lg:pt-10'>
            {children}
        </div>
    )
}