/* 
    variabel express untuk memanggil library express
    variabel bodyParser memanggil library body-parser
    app => fungsi secara global untuk memanggil express js
*/

const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express();  

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});
