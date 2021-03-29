import './App.css';
import ChartApp from './components/chart-app';
import Clipboard from './components/clipboard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const App = () => {

    const activeLink = (e) => {
        for (let index = 0; index < document.getElementsByClassName("nav-link").length; index++) {
            const element = document.getElementsByClassName("nav-link")[index];
            element.className = "nav-link";
        }

       e.target.className += " active";
    }
    
    return (
        <Router>
            <div>
            <div className="App">
                React Chart - API Integration
            </div>
            <ul className=" m-2 nav nav-tabs">
                <li onClick={activeLink} className="nav-item">
                    <Link className="nav-link active" to="/">Chart App</Link>
                </li>
                <li onClick={activeLink} className="nav-item">
                    <Link className="nav-link" to="/copyToClipBoard?q=ABC">Copy Clipboard</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ChartApp />
                </Route>
                <Route path="/copyToClipBoard">
                    <Clipboard />
                </Route>
            </Switch>
            </div>
        </Router>
    );
}

export default App;