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
        return (
        <Router>
            <div>
            <div className="App">
                React Chart - API Integration
            </div>
            <ul className=" m-2 nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Chart App</Link>
                </li>
                <li className="nav-item">
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