import React from 'react'

import Menu from '../components/Menu'
import Brand from '../components/Brand'
import ContentCard from '../components/ContentCard'
import WhyIeltsEase from '../components/WhyIeltsEase'

import image from '../assets/Image/EASE.png'

function IeltsEaseMainPage() {
    return (
        <div className='IeltsEaseMainPage '>
            <div className='HeaderSesion pb-4'>
                <div className='container pb-3'>
                    <Menu/>
                    <div className=''>
                        <img className='' src={image} alt=''/>
                        <div className='Colored d-flex px-3'>
                            <span className=' mt-3 ms-2'>
                            </span>
                            <p className=''> 
                                ما برای پیداکردن نیاز های خود همکاری میکنیم
                            </p>
                        </div>
                        <h1 className=' me-2 my-3 fw-bold'>
                            مردم را 
                            <br/>
                            بایکدیگر
                            <span className='text-info'>
                                متحد میکنیم.
                            </span>
                        </h1>
                        <p className='subTitr py-3 text-secondary fw-bold'>
                            مفهوم یک شرکت مشاوره مدیریت در نیویورک است که متخصص در ساخت مدل سازی اطلاعات است.
                        </p>
                        <button className=' fw-bold my-3 py-3 px-4 border-0 rounded-pill '>
                            شروع کنید
                        </button>
                    </div>
                </div>
            </div>
            <div className='SubHeader d-flex flex-wrap '>
                <ContentCard/>
                <Brand/>
            </div>
            <WhyIeltsEase/>
        
        </div>
    )
}

export default IeltsEaseMainPage