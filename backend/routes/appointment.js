import express from "express";
// import Appointment from "./models/appointments.js"
import User from "../models/user.js"

// appointmentRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /appointment.
const appointmentRoutes = express.Router();

 
 
// List of all the appointments.
appointmentRoutes.get('/', async function (req, res) {
//  let db_connect = dbo.getDb("appointments");
//  db_connect
//    .collection("appointments")
//    .find({})
//    .toArray(function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
const user = await User.find()
res.json(user)
});
 
// // Single appointment by id
// appointmentRoutes.route("/appointment/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("appointments")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// // Create a new appointment.
// appointmentRoutes.route("/appointment/add").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myobj = {
//    date: req.body.date,
//    time: req.body.time
//  };
//  db_connect.collection("appointments").insertOne(myobj, function (err, res) {
//    if (err) throw err;
//    response.json(res);
//  });
// });
 
// // Update a appointment by id.
// appointmentRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//     date: req.body.date,
//     time: req.body.time
//    },
//  };
//  db_connect
//    .collection("appointments")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// // Delete a appointment
// appointmentRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("appointments").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
export default appointmentRoutes;