export default function SectionStatus({ isMainSecOpen }) {
    return (
        <p className='text-2xs lg:text-xs'>
            {isMainSecOpen === false ? '(expand)' : '(close)'}
        </p>
    )
}