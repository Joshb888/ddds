const route = require('express').Router()
const db = require('../db')
route.get('/Raj',(req,res)=>{
    db.getAllstudentR()
        .then((students)=>res.send(students))
        .catch((err)=>res.send({error: err}))
        
})
route.get('/Raj/slots',(req,res)=>{
    db.getAllSlotsR()
    .then((slots)=>res.send(slots))
    .catch((err)=>res.send({error:err}))
})
route.get('/Raj/Dates',(req,res)=>{
    db.getAllDatesR()
    .then((dates)=>res.send(dates))
    .catch((err)=>res.send({error:err}))
})
route.post('/Raj',(req,res)=>{
    db.addSlotsR(req.body.Date,req.body.Slot,req.body.Available)
    .then(()=>{res.redirect('/Raj')})
    .catch((err)=>res.send({error:err}))
})
route.get('/Prem',(req,res)=>{
    db.getAllstudentP()
        .then((students)=>res.send(students))
        .catch((err)=>res.send({error: err}))
})
route.get('/Prem/slots',(req,res)=>{
    db.getAllSlotsP()
    .then((slots)=>res.send(slots))
    .catch((err)=>res.send({error:err}))
})
route.get('/Prem/Dates',(req,res)=>{
    db.getAllDatesP()
    .then((dates)=>res.send(dates))
    .catch((err)=>res.send({error:err}))
})
route.post('/Prem',(req,res)=>{
    db.addSlotsP(req.body.Date,req.body.Slot,req.body.Available)
    .then(()=>{res.redirect('/Prem')})
    .catch((err)=>res.send({error:err}))
})
route.get('/Aryan',(req,res)=>{
    db.getAllstudentA()
        .then((students)=>res.send(students))
        .catch((err)=>res.send({error: err}))
})
route.get('/Aryan/slots',(req,res)=>{
    db.getAllSlotsA()
    .then((slots)=>res.send(slots))
    .catch((err)=>res.send({error:err}))
})
route.get('/Aryan/Dates',(req,res)=>{
    db.getAllDatesA()
    .then((dates)=>res.send(dates))
    .catch((err)=>res.send({error:err}))
})
route.post('/Aryan',(req,res)=>{
    db.addSlotsA(req.body.Date,req.body.Slot,req.body.Available)
    .then(()=>{res.redirect('/Prem')
        
         }   
    )
    .catch((err)=>res.send({error:err}))
})
route.get('/consellors',(req,res)=>{
    db.getAllConsellors()
    .then((consellors)=>res.send(consellors))
    .catch((err)=>res.send({error:err}))
})
route.post('/students',(req,res)=>{
    console.log("Here in post")
    db.addDataToStudents(req.body.name,req.body.Slot,req.body.Date,req.body.consellor_id,req.body.Description)
    .then(()=>res.redirect('/students'))
    .catch((err)=>{res.send({error:err})})
})
route.post('/students/R',(req,res)=>{
    console.log("Here inRaj in post")
    db.updateTableR(req.body.available,req.body.Slot,req.body.Date)
    .then(()=>res.redirect('/students'))
    .catch((err)=>{res.send({error:err})})
})
route.post('/students/P',(req,res)=>{
    db.updateTableP(req.body.available,req.body.Slot,req.body.Date)
    .then(()=>res.redirect('/students'))
    .catch((err)=>{res.send({error:err})})
})
route.post('/students/A',(req,res)=>{
    db.updateTableA(req.body.available,req.body.Slot,req.body.Date)
    .then(()=>res.redirect('/students'))
    .catch((err)=>{res.send({error:err})})
})
route.get('/students/list',(req,res)=>{
    db.getFromStudents()
    .then((students)=>res.send(students))
    .catch((err)=>res.send({error:err}))
})
exports = module.exports = {
    route
}