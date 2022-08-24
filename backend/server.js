import express from 'express';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import User from "./models/user.js";
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import appointmentRoutes from "./routes/appointment.js"

const secret = 'secret123';

mongoose.connect(`mongodb+srv://userdb:6UPDkkf47u9mrqHy@atlascluster.x7zogyl.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected! Listening to localhost 3000");
  })
  .catch((err) => console.log(err));

const app = express();
app.use("/appointment", appointmentRoutes);
app.use(cookieParser());
app.use(bodyParser.json({extended:true}));
app.use(cors({
  credentials:true,
  origin: 'http://localhost:3001',
}));

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/user', (req, res) => {
  if (!req.cookies.token) {
    return res.json({});
  }
  const payload = jwt.verify(req.cookies.token, secret);
  User.findById(payload.id)
    .then(userInfo => {
      if (!userInfo) {
        return res.json({});
      }
      res.json({id:userInfo._id,email:userInfo.email});
    });

});

app.post('/register', (req, res) => {
  const {email,password} = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({password:hashedPassword,email});
  user.save().then(userInfo => {
    jwt.sign({id:userInfo._id,email:userInfo.email}, secret, (err,token) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.cookie('token', token).json({id:userInfo._id,email:userInfo.email});
      }
    });
  });
});

app.post('/login', (req, res) => {
  const {email,password} = req.body;
  User.findOne({email})
    .then(userInfo => {
      if (!userInfo) {
        return res.json({});
      }
      const passOk = bcrypt.compareSync(password, userInfo.password);
      if (passOk) {
        jwt.sign({id:userInfo._id,email},secret, (err,token) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            res.cookie('token', token).json({id:userInfo._id,email:userInfo.email});
          }
        });
      } else {
        res.sendStatus(401);
      }
    })
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').send();
});

app.listen(3000);