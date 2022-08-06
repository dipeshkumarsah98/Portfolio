import React from 'react'
import { Carousel as Slider } from 'flowbite-react'
export const Carousel = () => {
    return (

        <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Slider

                >
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        Slide 1
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        Slide 2
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        Slide 3
                    </div>
                </Slider>
            </div>
        </div>

    )
}
