import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function LandingPage() {
    return ( 
        <div className='landingPageContainer'>
            <nav className='navbar'>
                <div className='navTitle'>
                    VideoMeet
                </div>
                <div className='navOptions'>
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <button className='orangeButton'>Login</button>
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