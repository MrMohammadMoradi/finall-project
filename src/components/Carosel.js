import React from 'react'
import {Carousel} from 'react-bootstrap'

import bg1 from '../assets/Image/bg4-Orange.jpg'
import bg2 from '../assets/Image/bg6-Yellow.jpg'
import bg3 from '../assets/Image/bg3-Pink.jpg'
import ease from '../assets/Image/EASE.png'


function Carosel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="carouselImg d-block w-100"
                    src={bg1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='carousel-titr fs-2 fw-bold'>
                            عنوان این مطلب در این بالا قرار میگیره و میتونه دراز باشه
                        </h3>
                        <p className='text-secondary fw-bold'>
                            دسته بندی: مطلب آیلتس  /  28آذر 1399 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="carouselImg d-block w-100"
                    src= {bg2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='carousel-titr fs-2 fw-bold'>
                            یه عنوان مطلب دیگه که اینجا قرار میگیره و میتونه دراز باشه   
                        </h3>
                        <p className='text-secondary fw-bold'>
                            دسته بندی: مطلب آیلتس  /  28  آذر 1399 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="carouselImg d-block w-100"
                    src= {bg3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='carousel-titr fs-2 fw-bold'>
                            یه عنوان مطلب دیگه تری که اینجا قرار میگیره و میتونه دراز باشه
                        </h3>
                        <p className='text-secondary fw-bold'>
                            دسته بندی: مطلب آیلتس  /  28آذر 1399 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <img className='CarouselEASE' src={ease} alt = "EASE"/>
        </div>
    )
}

export default Carosel