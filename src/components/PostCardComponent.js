import React from 'react'

import Image from '../assets/Image/Image.png'

function PostCardComponent() {
    return (
        <div className='PostCard d-flex'>
            <img className='PostImage my-3 mx-2' src={Image} alt='ImagePost'/>
            <div className='TextCard my-2'>
                <h4 className='my-3 me-3'> عنوان این خبر اینجا قرار میگیرد </h4>
                <p className=' mt-2 mx-3'> دو خط توضیح کوتاه در مورد این خبر در این جا قرار میگیرد
                    دو خط توضیح کوتاه در مورد این خبر در این جا قرار میگیرد 
                    دو خط توضیح کوتاه در مورد این خبر در این جا قرار میگیرد 
                    <div className='DateAndMore d-flex'>
                        <span className='DateSpan'/>
                        <p className='mt-2 me-2 fw-bold'>
                            <span className='Date text-secondary'>
                                25 خرداد 1398
                            </span>
                            | ادامه خبر ...
                        </p>
                    </div>
                </p>
            </div>
        
        </div>
    )
}

export default PostCardComponent