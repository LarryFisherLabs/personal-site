export default function TextButton({ href, label, download = null }) {
    if (download === null) {
        return (
            <a className={"lg:hover:opacity-70 active:opacity-50"} href={href} target="_blank" ><u>{label}</u></a>
        )
    } else {
        return (
            <a className={"lg:hover:opacity-70 active:opacity-50"} href={href} download={download} ><u>{label}</u></a>
        )
    }
}