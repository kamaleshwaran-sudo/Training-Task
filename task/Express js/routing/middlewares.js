const express = require('express');

const checkIfUserExsist = (req,res,next,customers)=>{
    const customerID = parseInt(req.params.id);
    const checker = customers.find(customer=>customer.id === customerID) ;
    if(!checker){
        res.json("there is no such user exsist");
    }
    next();
}

module.exports = {checkIfUserExsist};
