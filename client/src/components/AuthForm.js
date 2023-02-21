import React from "react"

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={handleChange}
                placeholder="Username"
            />
             <input
                type="text"
                value={password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button>{btnText}</button>
        </form>
    )
}
