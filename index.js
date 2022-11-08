const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //use body parser 
//app.use(express.static(path.join(__dirname, 'public'))); if use public dir

// Engine template
/* app.set('view engine', 'ejs');
app.set('views', 'views'); */

// Routes use:

// Test
/* app.use('/', (req, res) =>{
    console.log("test")
});
*/

app.listen(3000);
