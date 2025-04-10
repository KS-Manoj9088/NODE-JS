const express = require("express");
const path = require("path");
const Registrations = require("../models/registrations");

const htmlFilePath = path.join(__dirname,"..","index.html");

const homeRoute = async(req,res)=>{
    res.sendFile(htmlFilePath);
}

const formDataRoute = async(req,res)=>{
    const {username, email, number, rollno, year, branch, session, events} = req.body;
    console.log(req.body);

    try{
        const newRegistration = new Registrations({
            username,
            email,
            number,
            rollno,
            year,
            branch,
            session,
            events
        });
        await newRegistration.save();
        res.send("<h2>Your Response has been Recorded.</h2>");
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {homeRoute,formDataRoute};