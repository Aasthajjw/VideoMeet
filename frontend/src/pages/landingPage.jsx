import React from 'react';
import '../App.css';
import {Link, useNavigate} from 'react-router-dom';

function LandingPage() {
    const router = useNavigate();
    return ( 
        <div className='landingPageContainer'>
            <nav className='navbar'>
                <div className='navTitle'>
                    VideoMeet
                </div>
                <div className='navOptions'>
                    <p onClick={() => {
                        router("/aljk43")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")
                    }}>Register</p>
                    <button onClick={() => {
                        router("/auth")
                    }} className='orangeButton'>Login</button>
                </div>
            </nav>
            <div className='landingPageHero'>
                <div>
                    <h2><span style={{color: 'rgb(196, 130, 7)'}}>Connect</span> with your Loved Ones</h2> <br />
                    <h6>Cover a distance by VideoMeet</h6> <br />
                    <Link to='/auth'><button className='orangeButton'>Get Started</button></Link>
                </div>
                <div className='landingPageImage'>
                    <img src="/mobile.png" alt="Video Conferencing" />
                </div>
            </div>
        </div>
     );
}

export default LandingPage;
