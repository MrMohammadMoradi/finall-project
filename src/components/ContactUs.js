import React from 'react'

function ContactUs() {
    return (
        <div className='ContactUs my-5 col-lg-4 clo-sm-6 col-12 '>
            <h5 className='fw-bold my-3'>تماس با ما</h5>

            <h5 className='mt-3' >شهر زنجان</h5>
            <div className='address d-flex mb-3'>
                <i class="bi bi-geo-alt-fill"></i>
                <p>خیابان شهرداری ساختمان ۷</p>
            </div>

            <h5 className='mt-3'>شهر تهران</h5>
            <div className='address d-flex'>
                <i class="bi bi-geo-alt-fill mb-3"></i>
                <p>خیابان شهرداری ساختمان ۷</p>
            </div>

            <p className='PhoneNumber'> 123456789 (98+)</p>

        </div>
    )
}

export default ContactUs