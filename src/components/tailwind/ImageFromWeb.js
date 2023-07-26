import { useState } from "react"

export default function ImageFromWeb({ imgUrl, imgAlt }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const imgFromWeb = new Image()
    imgFromWeb.onload = () => {
        imgFromWeb.className = 'rounded-lg w-[3rem] h-[3rem] lg:w-[6.4rem] lg:h-[6.4rem]'
        imgFromWeb.alt = imgAlt
        setIsLoaded(true)
    }
    imgFromWeb.src = imgUrl

    return (
        <div>
            {isLoaded === true ? (
                <img className='rounded-lg w-[3rem] h-[3rem] lg:w-[6.4rem] lg:h-[6.4rem]' src={imgUrl} alt={imgAlt}/>
            ) : (
                <div className='w-[3rem] h-[3rem] lg:w-[6.4rem] lg:h-[6.4rem]'>
                    <p className='text-3xs lg:text-xs'>Loading...</p>
                </div>
            )}
        </div>
    )
}