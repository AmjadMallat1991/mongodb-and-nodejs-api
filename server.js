const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');

db.mongoose
  .connect(db.url,{})
  .then(()=>{
    console.log('Connected to DB')
  })
  .catch(err=>{
    console.log('Connot connect to DB',err)
    process.exit();
  })
  
var corsOptions = {
    origin:['http://localhost:8081','http://127.0.0.1:5500','http://127.0.0.1:5501'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./routes/tutorial.routes')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port  ${PORT}`)
})