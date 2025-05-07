require('dotenv').config();
const express=require('express')
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const authroute=require('./routes/userroute');
const serviceroute=require('./routes/serviceroute');
const queryroute=require('./routes/queryroute');

app.use('/auth',authroute);
app.use('/service',serviceroute);
app.use('/query',queryroute);
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));