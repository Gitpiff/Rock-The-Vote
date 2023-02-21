import React from "react"
import IssueForm from "./IssueForm"
//import IssueList from "./IssueList"
//import Issue from "./Issue"


export default function Profile() {
    return (
        <div className="profile">
            <h1>Welcome!</h1>
            <h3>Add Issue</h3>
            <IssueForm />
            <h3>Your Posts</h3>
        </div>
    )
}
