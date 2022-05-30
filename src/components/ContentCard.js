import React from 'react'

function ContentCard() {
    return (
        <div className='ContentCard d-flex'>
            <h3 className='CCTitle text-white text-end fw-bold me-3 my-4'>
                این همون عنوان مطلب است
            </h3>
            <p className='CCDescription text-white text-end mt-3 me-3 ms-4'>
                این یک متن آزمایشی برای تست جانمایی متون است و 
                هیچ کار برد دیگری ندارد.
                این یک متن آزمایشی برای تست جانمایی متون است و 
                هیچ کار برد دیگری ندارد.
                این یک متن آزمایشی برای تست جانمایی متون است و 
                هیچ کار برد دیگری ندارد.

            </p>
            <button className='seeMore my-4 px-5 py-2 fw-bold border-0 rounded-pill'>
                بیشتر بدانید 
            </button>
        </div>
    )
}

export default ContentCard