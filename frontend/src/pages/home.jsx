import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>
            <div className="navbar">
                <h2 className='navTitle'>VideoMeet</h2>
                <div className='navOptions'>
                    <p><IconButton onClick={() => {navigate("/history")}}>
                        <RestoreIcon style={{color: 'white'}} />
                    </IconButton>
                    History</p>
                    <h4 className='orangeButton' onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>
                        Logout
                    </h4>
                </div>
            </div>
            <div className="meetContainer">
                <div>
                    <h2>Providing Quality Video Call with audio and chats facilities</h2>
                    <div style={{ display: 'flex', gap: "10px", margin: '10px 0 10px 0'}}>
                        <span><TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" color='warning'/></span>
                        <h4 className='orangeButton' style={{fontSize: '1.5rem', padding: '1rem'}} onClick={handleJoinVideoCall}>Join</h4>
                    </div>
                </div>
                <div>
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)