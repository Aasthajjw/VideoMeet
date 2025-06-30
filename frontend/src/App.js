import './App.css';
import LandingPage from './pages/landingPage';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import AuthenticationPage from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/videoMeeting';
import HomeComponent from './pages/home';
import History from './pages/history';

function App() {
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/auth' element={<AuthenticationPage/>} />
          <Route path='/home' element={<HomeComponent />} />
          <Route path='/history' element={<History />} />
          <Route path='/:url' element={<VideoMeetComponent/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
