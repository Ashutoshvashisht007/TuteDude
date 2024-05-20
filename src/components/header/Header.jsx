import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <>
            <div className='header'>
                <span className='logo'>LOGO</span>
                <div className='buttonsDiv'>
                    <button className='login'>Login</button>
                    <button className='signup'>Signup</button>
                </div>
            </div>
            <div className="headerContent">
                <span className='s1'>Overview</span>
                <span className='s2'>Curriculum</span>
                <span className='s3'>Refund</span>
                <span className='s4'>Testimonials</span>
            </div>
        </>
    )
}

export default Header