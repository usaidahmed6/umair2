import './App.css';
import Home from './screens/Home';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>

  );
}

export default App;
