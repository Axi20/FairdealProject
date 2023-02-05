import React from "react";
import './aboutPage.css';
import AboutImg from './about.jpg';

const About = () => {

    return(
        <div className="about-flex-div">
            <div className=' about-external-div'>
                    <div className='about-data-external-div'>
                        <div className='about-flex-div'>
                            <div className='about-data-internal-div'>
                                <h1 className='about-title-h1'>FairDeal</h1>
                                <h1 className='about-title-h1'>Kik vagyunk mi?</h1>    
                                <p className='about-page-description'>A FairDeal-nél arra törekszünk, hogy a legjobb járműkölcsönzési élményt nyújtsuk Önnek. Küldetésünk, hogy biztonságos és megbízható járműveket biztosítsunk, kivételes ügyfélszolgálattal kombinálva.</p>
                            </div>
                        </div>
                        <div className='pb-10'>
                            <img className='about-page-img' src={AboutImg}></img>
                        </div>
                    </div>
            </div>
    </div>
    )
}

export default About;