export default function SectionHeader({ onClick, children }) {
    return (
        <h2 className='text-lg lg:text-xl font-semibold lg:hover:opacity-70 hover:cursor-pointer active:opacity-50' onClick={onClick}>
            {children}
        </h2>
    )
}