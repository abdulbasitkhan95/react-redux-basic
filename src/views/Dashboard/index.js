import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function Dashboard() {
    const [userEmail, setUserEmail] = useState('')
    const myUser = useSelector(state => state.user)

    return(
        <>
            <h1>Dashboard</h1>
            <p>User: {myUser? myUser.user.email : ''}</p>
        </>
    )
}

export default Dashboard