import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";

function Routea() {
    return(
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routea