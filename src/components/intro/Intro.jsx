import React from 'react'
import "./intro.css";
import Me from '../../img/arun.png'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <div className="i-intro">
                        <h2>Hello, I am</h2>
                    </div>
                    <div className="i-name">
                        <h1>ARUN M</h1>
                    </div>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">C programmer</div>
                            <div className="i-title-item">Front end Developer</div>
                            <div className="i-title-item">Photographer</div>
                        </div>
                        
                    </div>
                    <div className="i-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id molestias distinctio repellat obcaecati hic nisi pariatur aliquam odit commodi, adipisci amet animi placeat porro voluptate eveniet omnis iusto ullam quos quas expedita! Amet delectus eaque maxime corrupti voluptatibus similique quidem dignissimos inventore! Praesentium dicta, sit aut laborum adipisci offic ia. 
                        </div>

                </div> 

            </div>
            <div className="i-right">
              <div className="i-bg"></div>
<img src={Me} alt="" className='i-img' />
            </div>

        </div>
    )
}

export default Intro;