import React from 'react'
import "./stats.css"
import { stats } from '../../utils/dummy'

const Stats = () => {
    return (
        <div className='stats'>
            {
                stats.map((ele, idx) => (
                    <>
                        <div key={idx} className='statsDiv'>
                            <img src={ele.img} alt={ele.name} className='statsImg' />
                            <div className='statsContent'>
                                <span className='statsData'>{ele.data}</span>
                                <span className='statsName'>{ele.name}</span>
                            </div>
                        </div>
                        {
                            idx === (stats.length - 1) ? <span></span> : <div className='statsLine'></div>
                        }
                    </>
                ))
            }
        </div>
    )
}

export default Stats