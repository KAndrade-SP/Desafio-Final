import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from "embla-carousel-react"
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

const CarouselHome: React.FC = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([3])

    const { onDotButtonClick } = useDotButton(emblaApi)

    const onSelect = useCallback(() => {

        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())

    }, [emblaApi])

    useEffect(() => {

        if (!emblaApi) return

        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        onSelect()

    }, [emblaApi, onSelect])

    return (
        <div className='carousel-container'>
            <div className="embla hidden md:flex" ref={emblaRef}>
                <div className="embla__container">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className={`relative cursor-pointer embla__slide ${index === selectedIndex ? 'is-selected transition ease-in-out hover:scale-110' : ''}`}>
                            <img src={`https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/carousel${index + 1}.png`} alt="" />
                            {index === selectedIndex &&
                                <>
                                    <div className='absolute bg-white opacity-80 flex flex-col gap-4 py-6 px-6 3xl:bottom-20 3xl:left-10'>
                                        <p>0{index + 1} - {index === 0 ? 'Bed Room' : index === 1 ? 'Living Room' : 'Yard'}</p>
                                        <p className='font-semibold text-2xl'>Inner Peace</p>
                                    </div>
                                    <div className='hidden 3xl:flex absolute bg-buttonBrown py-4 px-5 3xl:bottom-20 3xl:right-20'>
                                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/arrow.svg" alt="Arrow Icon" />
                                    </div>
                                </>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__dots hidden md:flex">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot hidden md:flex'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default CarouselHome