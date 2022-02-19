import logo from './logo.svg';
import './App.css';
import Register from "./views/Register";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import {useState} from "react";
import {removeUser} from "./store/actions";
import { useDispatch } from "react-redux";
import Routea from "./config/route";

function App() {
    const [changeComponent, setChangeComponent] = useState(false)
    const [loginSuccessfully, setLoginSuccessfully] = useState(false)
    const dispatch = useDispatch()

    const onLoginClick = e => {
        setLoginSuccessfully(e)
    }

    const onLogOut = e => {
        dispatch(removeUser())
        setLoginSuccessfully(false)
        alert('Successfully')
    }


  return (
    <div className="App">
        
        {
            loginSuccessfully
            ?
            <>
                <Dashboard/>
                <button onClick={onLogOut}>Logout</button>
            </>
            :
            changeComponent ?
                <>
                    <Register/>
                    <button onClick={() => setChangeComponent(false)}>Login</button>
                </>
            :
                <>
                    <Login onLoginClick={onLoginClick}/>
                    <button onClick={() => setChangeComponent(true)}>Register</button>
                </>
        }

    </div>
  );
}

export default App;
