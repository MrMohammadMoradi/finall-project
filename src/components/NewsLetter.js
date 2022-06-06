import React from 'react'

function NewsLetter() {
    return (
        <div className='NewsLetter my-5 col-lg-4 clo-sm-6 col-12' >
            <h5 className='fw-bold my-3'>
                خبر نامه
            </h5>
            <p className='w-75'>
                ثبت نام برای دریافت پیشنهادات ویژه ،‌
                آموزش ، اخبار و بروزرسانی ها. 
            </p>

            <div className='EmailBox'>
                <input className='rounded-pill py-3 bg-whaite pe-3' type="text" placeholder='ایمیل شما' required/>
                <button className='rounded-circle p-3 border-0'>
                    <i class="bi bi-chevron-left"></i>
                </button>
            </div>

            <div className='SosialMedia pt-4'>
                
                <a href='#' className='px-2'>
                    <i class="bi bi-twitter"></i>
                </a>
                <a href='#' className='px-3'>
                    <i class="bi bi-facebook"></i>
                </a>
                <a href='#' className='px-2'>
                    <i class="bi bi-pinterest"></i>
                </a>
                <a href='#' className='px-3'>
                    <i class="bi bi-linkedin"></i>
                </a>
                <a href='#' className='px-2'>
                    <i class="bi bi-instagram"></i>
                </a>
                
                

            </div>

        </div>
    )
}

export default NewsLetter