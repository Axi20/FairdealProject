import React from "react";
import './style/aboutPage.css';
import AboutImg from './about.jpg';
import './style/benefitPage.css';
import Money from './style/img/save-money.png';
import Home from './style/img/home.png';
import Car from  './style/img/electric-car.png'
import './style/featurePage.css';
import Support from './style/img/customer-service.png';
import Insurance from './style/img/car-insurance.png';
import Offer from './style/img/offer.png';
import './style/feedback.css'
import Logo from './style/img/logo.png';

const About = () => {

    return(
        <div className="about-flex-div">
            <div className=' about-external-div'>
            <img src={Logo} className="ab-logo" />
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
                <div>
                    <h1 className="why-choose-us">Miért minket válasszon?</h1>
                    <hr></hr>
                </div>
                <div className="benefit-row">
                    <div className="benefit-column">
                        <img src={Money} alt="clock" className="benefit-center-icons pt-5" />
                        <h2 className="benefit-text-center pt-3">Megfizethető árak</h2>
                        <p className="benefit-text-center benefit-pt-3">
                            Árainkat úgy határoztuk meg, hogy mindenki meg tudja találni a számára legalkalmasabb autót.<br /></p>
                    </div>
                    <div className="benefit-column">
                        <img src={Home} alt="home" className="benefit-center-icons benefit-pt-5" />
                        <h2 className="benefit-text-center benefit-pt-3 ">Otthonról igénybevehető</h2>
                        <p className="benefit-text-center  benefit-pt-3">
                            Weboldalunk használatával az összes szolgáltatásunk igénybevehető, bárhonnal, bármikor.</p>
                    </div>
                    <div className="benefit-column">
                        <img src={Car} alt="idea" className="benefit-center-icons pt-5" />
                        <h2 className="benefit-text-center benefit-pt-3">Nagy autó választék</h2>
                        <p className="benefit-text-center benefit-pt-3">
                            Kiemelkedő minőségű és mennyiségű bérelhető autó áll rendelkezésére, amik közül kedvére válogathat mindenki.<br /></p>
                    </div>
                </div>
                <hr className="b-f-hr"></hr>
                <div className="feature-row">
                    <div className="feature-column">
                        <img src={Support} alt="customer support icon" className="feature-center-icons feature-pt-5"/>
                        <h2 className="feature-text-center feature-pt-3">0-24 ügyfélszolgálat</h2>
                        <p className="feature-text-center feature-pt-3">
                            Ügyfélszolgálatunk a nap bármely szakaszában elérhető.<br />
                            
                        </p>
                    </div>
                    <div className="feature-column">
                        <img src={Insurance} alt="car insurance icon" className="feature-center-icons feature-pt-5"/>
                        <h2 className="feature-text-center feature-pt-3">Kedvező biztosítás</h2>
                        <p className="feature-text-center feature-pt-3">
                            Ügyfeleink kedvező áron vehetik igénybe biztosításainkat, valamint kibővített szolgáltatásainkat.
                        </p>
                    </div>
                    <div className="feature-column">
                        <img src={Offer} alt="offer icon" className="feature-center-icons feature-pt-5" />
                        <h2 className="feature-text-center feature-pt-3">Időszakos akciók</h2>
                        <p className="feature-text-center feature-pt-3">
                            Időszakos akciókkal bővülő kínálatunkból bárki megtalálja a számára megfelelő autót.<br />
                        </p>
                    </div>
                  
                </div>
                <hr className="hr-features"></hr>
                <div className="feedback-div">
                    <div className="feedback-container">
                        <div className="feedback-header text-center">
                            <h1 className="feedback-title">Ügyfeleink visszajelzései</h1>
                            <p className="feedback-text">
                            A Fairdealnél büszkék vagyunk az általunk kínált autókra és szolgáltatásokra, és mindig hálásak vagyunk, ha pozitív visszajelzéseket kapunk ügyfeleinktől.
                             <br />Úgy gondoljuk, hogy mások tapasztalatairól szóló beszámolók első kézből való meghallgatása értékes információforrás lehet,<br />és örömmel osztunk meg néhány véleményt, amit kaptunk.
                            </p>
                        </div>
                    </div>
                    <div className="feedback-row">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="rounded-circle feedback-avatar" alt="avatar" />
                            <h5 className="feedback-name">Sarah <br></br>
                            <p className="feedback-star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                            </h5>
                            <p className="feedback-text">
                            "Nemrég béreltem autót erről a webhelyről az országúti utazásomra, és rendkívül lenyűgözött az egész élmény. A weboldalon könnyű volt navigálni, és a foglalási folyamat zökkenőmentes volt. Az autó kiváló állapotban volt, és emlékezetessé tette az utazásomat. Nagyon ajánlom ezt az oldalt mindenkinek, aki megbízható és kényelmes autóbérlési szolgáltatást keres." - Sarah                            </p>
                    </div>
                    <div className="feedback-row">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" className="rounded-circle feedback-avatar" alt="avatar" />
                            <h5 className="feedback-name">Márk <br></br>
                            <p className="feedback-star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                            </h5>
                            <p className="feedback-text">
                            "Kicsit féltem az online autóbérléstől, de ez a webhely minden félelmemet száműzte. Az ügyfélszolgálat fantasztikus volt, és nagyon segítőkészek voltak minden kérdésem megválaszolásában. A bérelt autó tökéletes állapotban volt, és stresszmentessé tette az utam. Minden bizonnyal ezt a weboldalt fogom használni minden jövőbeni autóbérlési igényem kielégítésére." - Márk
                            </p>
                    </div>
                    <div className="feedback-row">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="rounded-circle feedback-avatar" alt="avatar" />
                            <h5 className="feedback-name">Liza <br></br>
                            <p className="feedback-star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                            </h5>
                            <p className="feedback-text">
                            "Kedvező árú autóbérlési lehetőséget kerestem a családi nyaralásomhoz, és ez a weboldal nem okozott csalódást. Az árak nagyon versenyképesek voltak, a foglalási folyamat pedig gyors és egyszerű. A bérelt autó tiszta, kényelmes és jól karbantartott volt. Nagyon ajánlom ezt a weboldalt mindenkinek, aki problémamentes autóbérlési élményt keres." - Liza
                            </p>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default About;