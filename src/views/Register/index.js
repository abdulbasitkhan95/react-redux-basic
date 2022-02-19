import {useState} from "react";
import {registerFirebase} from "../../config/firebase";

const Register = () => {
    const [registerState, setRegisterState] = useState([])


    const onChange = e => {
        setRegisterState({
            ...registerState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async () => {
        try {
            await registerFirebase(registerState.email, registerState.password, registerState.fullName)
            alert('Registered Successfully')
            setRegisterState('')
        }
        catch (e) {
            alert(e)
        }
    }

    return(
        <div>
            <div><input type="text" placeholder="Your Full Name" name="fullName" onChange={onChange}/></div>
            <div><input type="text" placeholder="Your Email" name="email" onChange={onChange}/></div>
            <div><input type="password" placeholder="Your Password" name="password" onChange={onChange}/></div>
            <div><button onClick={onSubmit}>Submit</button></div>
        </div>
    )
}

export default Register