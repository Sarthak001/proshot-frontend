import './App.css';
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from './components/auth';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Album from './pages/album';
import Profile from './pages/profile';
import { AuthStore } from './store/authstore';

import {useRecoilState} from 'recoil';
import Shared from './pages/shared';

function App() {
  const [auth, setAuth] = useRecoilState(AuthStore);


  return (
    <Routes>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route element={<ProtectedRoutes authHandler={auth} />}>
        <Route path="/shared" element={<Shared></Shared>} />
          <Route path="/" element={<Dashboard></Dashboard>} />
          <Route path="/album/:albumId" element={<Album></Album>}/>
          <Route path="/profile" element={<Profile></Profile>}/>
        </Route>
    </Routes>
  );
}

export default App;
