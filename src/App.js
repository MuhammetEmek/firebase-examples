import logo from './logo.svg';
import './App.css';
import Login from './firebaseAuth/login';
import 'primeflex/primeflex.css'; 
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
