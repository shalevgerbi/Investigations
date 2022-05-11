import {getUsers,postUsers}  from'../controllers/userControllers.js';
import express from 'express';
// const express = require('express');

export const userRoutes = () => {
    const router = express.Router();

    

//Post Method
router.post('/post', postUsers)

//Get all Method
router.get('/getAll', getUsers);

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
}
export default userRoutes;
