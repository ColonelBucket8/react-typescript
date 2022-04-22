import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
       <FirstComponent />
       <UserComponent name="John Doe" age={26} address="Jalan Kerdas 3, Gombak" dob={new Date()} />
    </div>
  );
}

export default App;
