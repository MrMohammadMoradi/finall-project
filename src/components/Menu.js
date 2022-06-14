import React from 'react'


function Menu() {
    return (
        <div className='Menu '>
            <ul className='d-flex flex-wrap justify-content-end'>
                <li className="nav-item dropdown px-lg-2">
                    <a className="nav-link text-black active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        صفحه اصلی
                    </a>
                    <ul class="dropdown-menu ms-3" aria-labelledby="navbarDropdown">
                        <li> Text 1 </li>
                        <li> Text 2 </li>
                        <li> Text 3</li>
                        <li> Text 4 </li>
                    </ul>
                </li>
                <li className="nav-item dropdown px-lg-2">
                    <a className="nav-link text-black active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        صفحات
                    </a>
                    <ul class="dropdown-menu ms-3" aria-labelledby="navbarDropdown">
                        <li> Text 1 </li>
                        <li> Text 2 </li>
                        <li> Text 3</li>
                        <li> Text 4 </li>
                    </ul>
                </li>
                <li className="nav-item dropdown px-lg-2">
                    <a className="nav-link text-black active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        نمومه کار ها
                    </a>
                    <ul class="dropdown-menu ms-3" aria-labelledby="navbarDropdown">
                        <li> Text 1 </li>
                        <li> Text 2 </li>
                        <li> Text 3</li>
                        <li> Text 4 </li>
                    </ul>
                </li>
                
            </ul>
        </div>
    )
}

export default Menu