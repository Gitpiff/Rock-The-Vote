import React from "react"
//import AuthForm from "./AuthForm"
//import { UserContext } from "../context/UserProvider"

//const initInputs = { username: "", password: "" }

export default function Auth(){
    // const [inputs, setInputs] = useState(initInputs)
    // const [toggle, setToggle] = useState(false)

    // const { signup } = useContext(UserContext)

    // function handleChange(e){
    //     const {name, value} = e.target
    //     setInputs(prevInputs => ({
    //         ...prevInputs,
    //         [name]: value
    //     }))
    // }

    // function handleSignup(e){
    //     e.preventDefault()
    //     signup()
    // }

    // function handleLogin(e){
    //     e.preventDefault()
    // }

    return (
        // <div className="auth-container">
        //     <h1>Political Issues</h1>
        //     {
        //         !toggle ?

        //         <>

        //             <AuthForm
        //                 handleChange={handleChange}
        //                 handleSubmit={handleSignup}
        //                 inputs={inputs}
        //                 btnText="Sign Up"
        //             />

        //         </> :
        //         <>

        //             <AuthForm
        //                 handleChange={handleChange}
        //                 handleSubmit={handleLogin}
        //                 inputs={inputs}
        //                 btnText="Login"
        //             />
        //             <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
        //         </>
        //     }
        // </div>
        <div>
            <h1>Auth</h1>
        </div>
    )
}
