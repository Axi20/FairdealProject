import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./style/signup.css";


function Registrate(){
    window.location.href = `/registration`;
}

const GotoPage = () => {
    return (
        // <div className='signup-external-div'>
        //     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        //     <img className='w-[500px] max-auto my-4' src="" alt="/" />
        //     <div className='flex flex-col justify-center'>
        //         <p className='text-[white] font-bold text-2xl'>REGISZTRÁLJON MÉG MA!</p>
        //         <h1 className='text-white md:text-4xl sm:text-xl text-xl font-bold py-2'>Hogy könnyen és gyorsan élvezni tudja az általunk kínált szolgáltatást</h1>
        //         <p className='text-black text-lg'>Elege van a hosszan tartó ügyintézésből és a vele járó papírmunkából? Nálunk nem kell aggódnia emiatt! Weboldalunk használatával mostantól csak egy kattintás az autó bérlés! Az otthon kényelméből tudja böngészni elérhető autóinkat, amit akár házhoz is viszünk a háztól-házig szolgáltatásunk keretén belül. </p>
        //         <button onClick={Registrate} className='bg-[#8758FF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-solid border-2 border-indigo-600   text-white'>Regisztrálok</button>
        //     </div>
        //     </div>
        // </div>
        <div className='signup-external-div'>
        
            <div>
                <p className='text'>
                <h1 className='signup'>Regisztráljon még ma!</h1>
                 Hogy könnyen és gyorsan élvezni tudja az általunk kínált szolgáltatásokat.
                 Elege van a hosszan tartó ügyintézésből és a vele járó papírmunkából?<br></br><br></br>Weboldalunk használatával mostantól csak egy kattintás az autó bérlés!
                 Az otthon kényelméből tudja böngészni elérhető autóinkat, amit akár házhoz is viszünk a háztól-házig szolgáltatásunk keretén belül.<br></br><br></br>       
                <a className='e-link' href="/registration"><button className='signup-btn'>Regisztráció</button></a>
                </p>
            </div>
        </div>
    )
}

export default GotoPage