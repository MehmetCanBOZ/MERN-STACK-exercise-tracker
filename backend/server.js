const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');

require('dotenv').config();


const uri=process.env.DB_STRING;

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true });

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("Database connection established successfully");
})


const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const exercisesRouter=require('./routes/exercise');
const usersRouter=require('./routes/user');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})