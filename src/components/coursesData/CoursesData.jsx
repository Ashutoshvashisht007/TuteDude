import React from 'react'
import { coursesInfo } from '../../utils/dummy'
import "./coursesData.css"

const CoursesData = () => {
    return (
        <div className='coursesData'>
            <div className='coursesDataInfo'>
                {
                    coursesInfo.map((ele, idx) => (
                        <div className='temp'>
                            <div className='coursesDataInfoText'>
                                <span className='coursesDataInfoName'>
                                    {ele.name}
                                </span>
                                <span className='coursesDataInfoDesc'>
                                    {
                                        ele.desc
                                    }
                                </span>
                            </div>
                            <button className='coursesDataInfoBtn'>
                                <img src="public/eye.png" className='coursesDataInfoImg' alt="Eye" />
                                <span className='coursesDataInfoBtnText'>View Curriculum</span>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CoursesData