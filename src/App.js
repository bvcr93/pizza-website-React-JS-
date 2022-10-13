
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Nav/>
     <Switch>
      <Route path='/' exact component = {Home}/>
      <Route path='/menu' exact component = {Menu}/>
      <Route path='/about' exact component = {About}/>
      <Route path='/contact' exact component = {Contact}/>
     </Switch>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
