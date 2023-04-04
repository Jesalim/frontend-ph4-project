
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Main from './components/main/Main';
import Ticket from './components/ticket/Ticket'
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import LogoutButton from './components/logout/LogoutButton';

function App() {
  return (
    <>
    {/* Uncomment the Login part to finish up with Authentications */}
    
     { <Login />  }
     { <LogoutButton />}
     <NavBar />
     <section className='sections'>
       <Routes>
          <Route path='/' element={<Main />}  />
          <Route path='/ticket' element={<Ticket />} />
       </Routes>
     </section>
    </>
  );
}

export default App;
