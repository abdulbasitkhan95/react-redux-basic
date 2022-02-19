import {LoginFireBase} from "../../config/firebase";
import {useState} from "react";
import { useDispatch } from "react-redux";

function Login(props) {

    const {onLoginClick} = props
    const [loginState, setLoginState] = useState([])
    const dispatch = useDispatch()

    const onChange = e => {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async () => {
        try {
            const user = await LoginFireBase(loginState.email, loginState.password)
            dispatch({
                type: 'ADD_USER',
                data: user
            })
            alert('successfully')
            onLoginClick(true)
        }
        catch (e) {
            alert(e)
        }
    }

    return(
        <>
            <div><input type="email" placeholder="Your Email" name="email" onChange={onChange}/></div>
            <div><input type="password" placeholder="Your Password" name="password" onChange={onChange}/></div>
            <div><button onClick={onSubmit}>Submit</button></div>
        </>
    )
}

export default Login