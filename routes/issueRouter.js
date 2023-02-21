const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/issue")

// Get All Issues
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, todos) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issue)
  })
})

// Get Issues by User Id
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, todos) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// Add new Issue
issueRouter.post("/", (req, res, next) => {
  //add the user property to the req.auth, by doing so we can identify the user
  console.log(req.body)
  req.body.user = req.auth._id
  const newIssue = new Todo(req.body)
  newTodo.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    //compare the user id before deleting
    { _id: req.params.todoId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
    }
  )
})

// Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    //compare ids, only the user who made the todo can update it
    { _id: req.params.todoId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

module.exports = issueRouter
