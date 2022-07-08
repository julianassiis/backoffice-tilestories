import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
      <div>
        <Router>
          <Routes/>
        </Router>
      </div>
  )
}

export default App;
