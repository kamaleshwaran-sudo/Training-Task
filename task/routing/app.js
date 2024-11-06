    const express = require('express');
    const app = express();
    const cors = require('cors');

    const {checkIfUserExsist} = require('./middlewares')

    app.use(express.json());
    app.use(cors());

    var customers=[];
    let id = 0;
    app.get('/',async (req,res) => {
        res.json(customers);
    })

    app.post('/add',async (req,res) => {
        const data = req.body;
        customers.push({id:id++,data});
        res.json(customers);
    })

    app.put('/update/:id',async (req,res) => {
        const customerID = parseInt(req.params.id);
        const data = req.body;
        const filteredArray = customers.filter(customer=>customer.id !== customerID);
        let updatedArray = null;

        customers = customers.map(customer=>{
            if(customer.id === customerID){
                return {...data};            
            }
            return customer;
        })
        res.json({message:"successfully updated",customers});
    })


    app.delete('/delete/:id',(req,res,next)=>checkIfUserExsist(req,res,next,customers),async (req,res) => {
        const customerID = parseInt(req.params.id);
        customers = customers.filter(customer => customer.id !== customerID);
        res.json({message:"successfully deleted",customers});
    })


    app.listen(5001,()=>{
        console.log("server is running successfully");
    })