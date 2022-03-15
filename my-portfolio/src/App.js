import { Fragment, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import { WavyContainer, WavyLink} from "react-wavy-transitions";
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './containers/contact/Contact';




function App() {

  const [menuIcon, setmenuIcon] = useState(false);

  const handlerMenuIcon = () => {  
    if (!menuIcon) {
        setmenuIcon(true);
      }else{
        setmenuIcon(false);
      }
  }

  return (
    <Fragment>
      <header className={!menuIcon ? 'header' : 'header nav__active'} >
        <div className="menu__icon" onClick={handlerMenuIcon}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <WavyContainer />
        <Router>
            <nav>
                <ul>
                  <li onClick={handlerMenuIcon}>
                    <WavyLink to="/home" waveColor="#9C2D41" >Home</WavyLink>
                  </li>
                  <li onClick={handlerMenuIcon}>
                    <WavyLink to="/about" waveColor="#9C2D41" >About</WavyLink>
                  </li>
                  <li onClick={handlerMenuIcon}>
                    <WavyLink to="/projects" waveColor="#9C2D41" >Projects</WavyLink>
                  </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/contact" exact component={Contact} />
                <Redirect to="/" />
            </Switch>
        </Router>
      </header>
    </Fragment>
  );
}

export default App;
