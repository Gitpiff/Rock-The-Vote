import React, { useState } from "react"
import axios from "axios"


export const UserContext = React.createContext()

//Interceptor
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`

    return config
})

export default function UserProvider(props){
    const initState = {
         user: JSON.parse(localStorage.getItem("user")) || {},
         token: localStorage.getItem("token") || "",
         issues: [],
         errMsg: ""
        }

    const [userState, setUserState] = useState(initState)

    //SignUp
    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    //Login
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }


    //Logout -Resets state
    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user:{},
            token: "",
            issues: []
        })
    }

    //Get User's Issues
    function getUserIssues(){
        userAxios.get("/api/issue/user")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    //Display Error Message to the User
    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    //Reset Auth Error
    function resetAuthError(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    //Add Issue
    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
        .then(res =>{
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                resetAuthError
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

