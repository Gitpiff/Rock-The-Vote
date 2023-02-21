import React, { useState } from "react"

const initInputs = {
    title: "",
    description: "",
    imgUrl: ""
}

export default function IssueForm(){
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    const { title, description, imgUrl } = inputs

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
            />
            <input
            type="text"
            name="imgUrl"
            placeholder="Image URL"
            value={imgUrl}
            onChange={handleChange}
            />
            <textarea
            name=""
            placeholder="Description"
            value={description}
            onChange={handleChange}
            cols="30"
            rows="10"></textarea>

            <button>Add Issue</button>

        </form>
    )
}
