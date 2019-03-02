let path = require('path');
let express = require('express');
let mainRouter = express.Router();

// console.log(`I'm inside a module!`);
// module.exports = {
// some: `module`,
// number: 2
// };

mainRouter.get('/', function (req, res) {
res.send('Hello World, I\'m Node.js');
});

mainRouter.get('/about', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
module.exports = mainRouter;
