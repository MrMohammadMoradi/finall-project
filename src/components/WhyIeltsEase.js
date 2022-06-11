import React from 'react'
import Title from './Title'
import PositivePointCard from './PositivePointCard'


import i1 from '../assets/Image/bg1-Blue.jpg'
import i2 from '../assets/Image/bg2-Green.jpg'
import i3 from '../assets/Image/bg3-Pink.jpg'
import i4 from '../assets/Image/bg4-Orange.jpg'
import i5 from '../assets/Image/bg5-Purple.jpg'
import i6 from '../assets/Image/bg6-Yellow.jpg'


function WhyIeltsEase() {

        const data = [
        {id: 0, image: i1, 
            title: "این همان عنوان مطلب است",
            description: "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد."
        },
        {id: 1, image: i2, 
            title: "این همان عنوان مطلب است",
            description: "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد."
        },
        {id: 2, image: i3, 
            title: "این همان عنوان مطلب است",
            description: "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد."
        },
        {id: 3, image: i4, 
            title: "این همان عنوان مطلب است",
            description: "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد."
        },
        {id: 4, image: i5, 
            title: "این همان عنوان مطلب است",
            description: "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد."
        },
        {id: 5, image: i6, 
            title: "این همان عنوان مطلب است",
            description: "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد."
        }
    ]

    return (
        <div className='WhyIeltsEase'>
            <div className='container text-white mt-3 py-4'>
                <Title title={" آخرین دوره های آیلتس ایز"} 
                    paragraph={"چرا باید آیلتس ایز را انتخاب کنیم؟"}/>
                
                <div className='ReasonForWhy d-flex flex-wrap'>
                    {
                        data.map(item =>
                                    <PositivePointCard image={item.image} 
                                        title={item.title} description={item.description}/>
                                )
                    }
                </div>

            </div>
        </div>
    )
}

export default WhyIeltsEase