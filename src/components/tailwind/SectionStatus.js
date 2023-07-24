export default function SectionStatus({ isMainSecOpen }) {
    return (
        <p className='text-xs lg:text-sm'>
            {isMainSecOpen === false ? '(expand)' : '(close)'}
        </p>
    )
}