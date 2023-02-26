const express = require("express")
const authRouter = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

//Sign up
authRouter.post("/signup", (req, res, next) => {
    //Check if the username exists
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        //if there's an error
        if(err) {
            req.status(500)
            return next(err)
        }
        //if the user already exists
        if(user) {
            res.status(403)
            return next(new Error("That username is already taken"))
        }
        //if the user does not exist then we can create a new user
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            //check for errors
            if(err) {
                res.status(500)
                return next(err)
            }
            //if no errors, return a new username and a token
                    // .sign() takes a payload -in this case the new User and the SECRET
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({token, user: savedUser.withoutPassword()})
        })
    })
})


//Login
authRouter.post("/login", (req, res, next) => {
    //Check if the user exists
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        //if user does not exist
        if(!user) {
            res.status(403)
            return next(new Error("Username or Password are incorrect"))
        }
        //check the password
        user.checkPassword(req.body.password, (err, isMatch) => {
            //if the password does not match
            if(err){
                res.status(403)
                return next(new Error("Username or Password are incorrect"))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error("Username or Password are incorrect"))
            }
            //if username exists and password matches create a token
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({token, user: user.withoutPassword()})

        })
    })
})

module.exports = authRouter
