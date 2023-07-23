import  {BrowserRouter as Router,Route,RouterProps,Routes,useNavigate} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import HomeScreen from './views/Home';
import LoginScreen from './views/Login';
import RegisterScreen from './views/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
         {/*  <Route path="/home" element={<HomeScreen/>} />
          <Route path="/register" element={<RegisterScreen />} /> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
