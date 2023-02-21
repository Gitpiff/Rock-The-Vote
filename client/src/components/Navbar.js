import React from "react"
import { Link } from "react-router-dom"

export default function Nav(props) {
    return (
        <nav>
            <Link to="/profile">Profile</Link>
            <Link to="/public">Public</Link>
        </nav>
    )
}
