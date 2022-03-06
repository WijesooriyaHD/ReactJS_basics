import logo from './logo.svg';
import './App.css';
import Form from './Components/form';
import Home from './Components/home';
import {Route,Routes , Link} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Routes>
      <Route exact path="/" element={ <Home /> }/>
      <Route path="/form" element={ <Form /> }/>
      </Routes>

    </div>
    


    

  );
}

export default App;
