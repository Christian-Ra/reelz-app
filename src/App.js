import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SetList from "./components/SetList";
import HomeBar from "./components/HomeBar";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";

const App = () => {
  const castList = [
    {
      id: 1,
      name: "Chris Razo",
      role: "Director",
      socials: {
        instagram: "razo_christian",
        linkedIn: "christian-ra",
        tikTok: "christianrazo09",
      },
    },
    {
      id: 2,
      name: "Carlos Ty",
      role: "Camera Man",
      socials: {
        instagram: "cty.visuals",
        linkedIn: "carlos-ty",
        tikTok: "cty.visuals",
      },
    },
    {
      id: 3,
      name: "Anthony Ty",
      role: "Sound tech",
      socials: {
        instagram: "atypiano",
        tikTok: "atypiano",
      },
    },
  ];
  return (
    <Router>
      <div className='App'>
        <HomeBar />
        <Routes>
          {/* <Route path='/' element={<App />} /> */}
          <Route path='/login' element={<LoginPage />} />
          <Route path='/createaccount' element={<CreateAccountPage />} />
          <Route path='/setlist' element={<SetList castSheet={castList} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
