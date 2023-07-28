export default function TextButton({ href, label, download = null }) {
    const className = "text-sm lg:text-base lg:hover:opacity-70 active:opacity-50"
    return (
        <div className="flex w-[6rem] lg:w-[6.7rem] justify-center" >
            {download === null ? (
                <a className={className} href={href} target="_blank" ><u>{label}</u></a>
            ) : (
                <a className={className} href={href} download={download} ><u>{label}</u></a>
            )}
        </div>
    )
}