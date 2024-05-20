import React, { useState } from 'react'
import "./home.css"
import Stats from '../components/stats/Stats'
import CoursesData from '../components/coursesData/CoursesData'
import Logo from '../components/logos/Logo'

const Home = () => {

  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='home'>
      <div className='homeHeading'>
        <div className='homeHeadingUni'>
          <img className='gradLogo' src="public/grad.png" alt="Grad Logo" />
          <span className='gradHeading'>An <b>IIT Delhi</b> Alumni Initiative</span>
        </div>
        <div className="homeHeadingContent">
          <span className='paraBlack'>Become an Expert in the field of</span>
          <span className='paraPurple'>Data Science with 6 courses</span>
        </div>
        <span className='homeHeadingSpan'>A specially crafted Tech Kickstarter, with</span>
        <span className='homeHeadingSpanCourses'> 5+ extensive online courses.</span>
        <div className='homeHeadingCertificates'>
          <div className='homeHeadingCertificates1'>
            <img src="public/award_star.png " alt="Star" />
            <span>Personal Mentorship</span>
          </div>
          <div className="homeHeadingCertificates2">
            <img src="public/award_star.png " alt="Star" />
            <span>Internship Assistance</span>
          </div>
          <div className="homeHeadingCertificates3">
            <img src="public/award_star.png " alt="Star" />
            <span>Industry Certified Courses</span>
          </div>
        </div>
        <div className="homeHeadingEnroll">
          <button className="homeHeadingEnrollbtn">
            <span className='homeHeadingEnrollSpan'>Enroll Now</span>
            <img className='homeHeadingEnrollImg' src="public/Group.png" alt="Enroll" />
          </button>
          <button className="homeHeadingKnowMore">
            <span className='homeHeadingKnowMoreSpan'>Know More</span>
            <img className='homeHeadingKnowMoreImg' src="public/questionmark.png" alt="?" />
          </button>
        </div>
      </div>

      <div className='homeHeadingStats'>
        <Stats />
      </div>
      <div className="homeCourses">
        <div className="homeCoursesHeading">
          <span className='homeCoursesHeading1'>DATASCIENCE COURSE LEARNING PATH</span>
          <span className='homeCoursesHeading2'>
            <span className="gradientData">Data</span>
            <span className="gradientScience">Science</span>
            <span className="restOfText">Course Curriculum</span>
          </span>
        </div>
        <CoursesData />
      </div>

      <div className="homeSteps">
        <div className='homeStepsHeading'>
          <span className='homeStepsNormal'>Don't miss out on this</span>
          <span className='homeStepsPurple'> limited-time opportunity</span>
          <span className='homeStepsNormal'> to learn for</span>
          <span className='homeStepsPurple'> Free!</span>
        </div>
        <div className="homeStepsRefundable">
          <span className='homeStepsRefundableEmoji'>100% Refund Offer 😎 </span>
          <div className='homeStepsRangeDiv'>
            <span>{value} Seats Left</span>
            <input
              type="range"
              class="slider"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              style={{ background: `linear-gradient(90deg, #FFC41B ${value}%, #9849FF 0%)` }}
            />
          </div>
          <span className='homeStepsRefundableEnds'>
            <img className='homeStepsRefundableEndsImg' src="public/time.png" alt="Time" />
            <span className='homeStepsRefundableEndsSpan'>Offer ends in 10:00Mins</span>
          </span>
        </div>
        <div className="homeStepsWorking">
          <span className='homeStepsWorkingHeading'>How does it work?</span>
          <div className='homeStepsAll'>
            <div className="homeSteps1">
              <img src="public/step1.png" alt="Step 1" />
              <div className='homeSteps1Div'>
                <span className='homeSteps1_1'>Step 1 : Enroll into your favorite course for only ₹1,499</span>
                <img style={{ width: "107px", height: "69px", marginTop: "16px" }} src="public/Frame.png" alt="Frame" />
                <span className='homeSteps1_2'>Start Learning with <b>Lifetime Course Access.</b></span>
              </div>
            </div>
            <div className="homeSteps2">
              <img src="public/step2.png" alt="Step 2" />
              <div className='homeSteps2Div'>
                <span className='homeSteps2_1'>Step 2: Complete Course & Assignments within 2 Years!</span>
                <div className='homeSteps2_2'>
                  <span className='homeSteps2_2_1'>2</span>
                  <span className='homeSteps2_2_2'>years time from the date of enrollment</span>
                </div>
                <span className='homeSteps2_3'>Finish the course within <b>2 Years</b> to Qualify for Refund.</span>
              </div>
            </div>
            <div className="homeSteps3">
              <img src="public/step3.png" alt="Step 3" />
              <div className='homeSteps3Div'>
                <span className='homeSteps3_1'>Step 3: Receive 100% Refund upon completion</span>
                <div className='homeSteps3_2'>
                  <span className='homeSteps3_2_1'>100%</span>
                  <span className='homeSteps3_2_2'>Enrollment Fee is refunded</span>
                </div>
                <span className='homeSteps3_3'>Upon Course Completion within <b>2 Years</b>, Get Your <b>₹1,499 Back.</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Logo />

      <div className="certificates">
        <div className='certificatesHeading'>
          <span className='certificatesHeading1'>Unlock</span>
          <span className='certificatesHeading2'>6 Certificates</span>
          <span className='certificatesHeading3'>&</span>
          <span className='certificatesHeading4'>Internship Opportunities!</span>
        </div>
        <div className='certficatesDiv'>
          <div className='certifcatesDiv1'>
            <span className='certifcatesDiv1Heading'>Get 6 Industry Recognized Certificates!</span>
            <img className='certifcatesDiv1Img' src="public/certificate1.png" alt="Certificate" />
            <div className='certifcatesDiv1Btns'>
              <span className='cerrificatesTags'>
                <img src="public/award_star1.png" alt="Award" />
                <span className='cerrificatesTagsSpan'>Official and Verified</span>
              </span>
              <span className='cerrificatesTags'>
                <img src="public/award_star1.png" alt="Award" />
                <span className='cerrificatesTagsSpan'>Enhances Credibility</span>
              </span>
            </div>
          </div>
          <div className='certifcatesDiv2'> 
            <div className='certifcatesDiv2_1'>
              <span className='certifcatesDiv2_1_1'>Bag Internship Opportunities!</span>
              <span className='certifcatesDiv2_1_2'>With every course, we make you not only industry-ready but also help you crack your first internship.</span>
            </div>
            <img className='certifcatesDiv2_2' src="public/Imagee.png" alt="Image" />
          </div>
        </div>
      </div>

      <div className='internship'>
        <span className='intershipHeading'>How does the Internship Program works ?</span>
        <img className='internshipDetails' src="public/intern.png" alt="Internship" />
        <button className='internshipBtn'>Apply now for ₹ 2999</button>
      </div>
    </div>
  )
}

export default Home