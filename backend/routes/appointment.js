const express = require("express");
 
// appointmentRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /appointment.
const appointmentRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// List of all the appointments.
appointmentRoutes.route("/appointment").get(function (req, res) {
 let db_connect = dbo.getDb("appointments");
 db_connect
   .collection("appointments")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// Single appointment by id
appointmentRoutes.route("/appointment/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("appointments")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// Create a new appointment.
appointmentRoutes.route("/appointment/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   date: req.body.date,
   time: req.body.time
 };
 db_connect.collection("appointments").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// Update a appointment by id.
appointmentRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
    date: req.body.date,
    time: req.body.time
   },
 };
 db_connect
   .collection("appointments")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// Delete a appointment
appointmentRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("appointments").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = appointmentRoutes;