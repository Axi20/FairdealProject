import React from 'react';
import Typed from 'react-typed';
import './style/effect.css';


const Effect = () => {
    const abc = 1;
    return (
        <div className='main'>
        
            <div className='effect-external-div'>
                {/* <p className='effect-first-line'>SOK ÉVES TAPASZTALAT</p>                */}
                <h1 className='effect-title'>Megfizethető árak és garantált minőség</h1>
                <div className='effect-internal-div'>
                    <p className='effect-choice'>Nagy választék: </p>
                    <Typed
                        className='effect-type'
                        strings={['Volvo', 'Volkswagen', 'Suzuki', 'Mercedes', 'Ford', 'Honda']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='effect-last-line'>Bármikor rendelkezésre állnak segítőkész, <br></br> képzett kollégáink</p>
                {/* <button className='effect-button'>Tudj meg többet!</button> */}
                {/* <img className='logo-img' src="https://cdn.discordapp.com/attachments/1042149414568984668/1070441372403900476/logo-removebg-preview.png"/> */}
                <a href="/about" className='e-link'><button className='e-button'>Tudj meg többet</button></a>
            </div>
        </div>
    )
}

export default Effect