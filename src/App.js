import Login from './component/Login/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Alert from './component/Alert';
import { useState } from 'react';



function App() {
  const [alert, setAlert] = useState({
    msg: null,
    type: null
  })
  const showalert = (msg, type) => {
  setAlert({ msg, type })
  // console.log(type);
  setTimeout(() => {
    setAlert({
      msg: null,
      type: null
    })
  }, 2000);
}
  return (
    <>
      <BrowserRouter>
        <Navbar showalert={showalert} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Login showalert={showalert} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
