import React from 'react'
import "./logo.css"
import { Logos } from '../../utils/dummy'

const Logo = () => {
    return (
        <div className='logoo'>
            <div className='logoHeading'>
                <span className='logoHeading1'>Top Companies Hiring</span>
                <span className='logoHeading2'>Data Scientist</span>
            </div>
            <div className='logoAll'>
            {
                Logos.map((ele,idx) => (
                    <div className='logos' key={idx}>
                        {
                            ele.image
                        }
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Logo