import React from 'react'
import {BsMoonFill,BsToggleOff,BsPencilSquare,BsBookmark,BsHeart,BsChatLeft,BsBoxArrowRight} from 'react-icons/bs'

function DropdownUserMenu() {
    return (
        <div>
            <div className='pt-3'>
                <p className='ms-3 me-3'>HOŞGELDİN</p>
                <p className='ms-3 me-3'>Mehmet Ali Öztekin</p>
                <hr class="divider"/>
            </div>
            <div className='ms-1 me-1 pb-4'>
                <div className='d-flex justify-content-between '>
                    <div className='d-flex justify-content-start mt-2 mb-2 ms-3 mt-1 mb-1 ms-3'>
                        <BsMoonFill className='my-auto' />
                        <p className='ms-2 my-auto my-auto'>Gece Modu</p>
                    </div>
                    <BsToggleOff className='me-3 my-auto'/>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-start mt-2 mb-2 ms-3'>
                        <BsPencilSquare className='my-auto'/>
                        <p className='ms-2 my-auto'>Profili Düzenle</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-start mt-2 mb-2 ms-3'>
                        <BsBookmark className='my-auto'/>
                        <p className='ms-2 my-auto'>Kaydettiklerim</p>
                    </div>
                    
                    <p className='me-3 my-auto'>26</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-start mt-2 mb-2 ms-3'>
                        <BsHeart className='my-auto'/>
                        <p className='ms-2 my-auto'>Tepkilerim</p>
                    </div>
                    <p className='me-3 my-auto'>1.2K</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-start mt-2 mb-2 ms-3'>
                        <BsChatLeft className='my-auto'/>
                        <p className='ms-2 my-auto'> Yorumlarim</p>
                    </div>
                    <p className='me-3 my-auto'>1</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-start mt-2 mb-2 ms-3'>
                        <BsBoxArrowRight className='my-auto'/>
                        <p className='ms-2 my-auto'>Çıkış yap</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownUserMenu
