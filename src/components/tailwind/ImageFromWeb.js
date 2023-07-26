import { useEffect, useState } from "react"

export default function ImageFromWeb({ imgUrl, imgAlt }) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const imgFromWeb = new Image()
        imgFromWeb.onload = () => {
            setIsLoaded(true)
        }
        imgFromWeb.src = imgUrl
    })

    return (
        <div>
            {isLoaded === true ? (
                <img className='rounded-lg w-[3rem] h-[3rem] lg:w-[6.4rem] lg:h-[6.4rem]' src={imgUrl} alt={imgAlt}/>
            ) : (
                <div className='flex items-center justify-center w-[3rem] h-[3rem] border rounded-lg lg:w-[6.4rem] lg:h-[6.4rem]'>
                    <p className='text-3xs lg:text-xs'>Loading...</p>
                </div>
            )}
        </div>
    )
}