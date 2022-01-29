const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes/');
const htmlRoutes = require('./routes/htmlRoutes/');



// middleware for the front end files, css, and js
app.use(express.static('public'));
// for parsing incoming json data made from a POST request
app.use(express.json());
// for parsing application/x-www-wform-urlencoded (string or array data)
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API server is now on ${PORT}!`);
});



    
  
   






