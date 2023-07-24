export default function SectionContainer({children}) {
    return (
        <div className='text-sm lg:text-base px-5 py-2 rounded-lg bg-purple-400/20 border-2 m-2 text-center lg:px-11 lg:py-3 max-w-[21.5rem] lg:max-w-[47rem]'>
            {children}
        </div>
    )
}