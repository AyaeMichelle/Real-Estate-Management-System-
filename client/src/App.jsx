import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Listings from './pages/Listings';
import ForgotPassword from './pages/ForgotPassword';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile.jsx';

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/listings" element={<Listings/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/log-in" element={<LogIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    
 </BrowserRouter>
  )
}
