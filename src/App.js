import logo from './logo.svg';
import './App.css';
import Index from './firebaseStore/index';
import 'primeflex/primeflex.css'; 
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 

function App() {
  return (
    <div className="App">
      <Index></Index>
    </div>
  );
}

export default App;
