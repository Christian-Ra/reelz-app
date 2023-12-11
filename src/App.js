import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SetList from "./components/SetList";

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
  ];
  return (
    <Router>
      <div className='App'>
        <p>Welcome to reelz!</p>
        <div>
          <h2>Click the button below to join the callsheet!</h2>
        </div>
        <Link to='/setList'>
          <button>Click to join callsheet</button>
        </Link>
        <Routes>
          <Route path='/setlist' element={<SetList castSheet={castList} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
