import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import {userRoutes} from './routes/userRoutes.js'

// require('dotenv').config();
dotenv.config();
const mongoString =process.env.DATABASE_URL;
console.log(mongoString)
// const express = require("express");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/userRoutes");


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error',(error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use('/api',userRoutes)
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});