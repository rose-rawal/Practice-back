// Filename: routes/index.js

// Import user schema from models/userSchema.js
const userSchema = require('../models/userSchema');

// Import and initialize router for http requests
const router = require('express').Router();

/**
 * GET api for fetching all users
 */
async function getAllUsers(req, res) {
    const {query}=req
    const users = await userSchema.find(query.search?{
        "name":query.search
    }:{});
    res.json(users);
    res.end();
}
router.get('/users', getAllUsers);

/**
 * GET api for fetching a user by id 
 */
async function getUserById(req, res) {
    const user = await userSchema.findOne({
        _id: req.params.id
    });
    res.json(user);
    res.end();
}
router.get('/users/:id', getUserById);

// /**
//  * POST api for creating a new user
//  */
async function addUser(req, res) {
    const { name, age } = req.body;
    const user = await userSchema.create({
        name,
        age
    });
    return res.json(user);
}
router.post('/users', addUser);

// /**
//  * PUT api for updating a user by id
//  */
async function updateUser(req, res) {
    const { name, age } = req.body;
    const user = await userSchema.findOneAndUpdate({
        _id: req.params.id
    }, {
        name,
        age
    }, {
        new: true
    });
    return res.json(user);
}
router.put('/users/:id', updateUser);

// /**
//  * DELETE api for deleting a user by id
//  */
async function deleteUser(req, res) {
    const user = await userSchema.findOneAndDelete({ _id: req.params.id });
    return res.json(user);
}
router.delete('/users/:id', deleteUser);

// Exports all the routes
module.exports = router;