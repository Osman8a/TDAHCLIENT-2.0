const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.send('Maintainance Mode');
// });

app.use(express.static(`${__dirname}/public`));

//Default 404 page
app.use((req, res) => {
    res.type('text/html');
    res.status(404);
    res.send('404 - Not Found :(');
});

// Default 500 Error page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/html');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(PORT, (req, res) => {
  console.log(`The server is up on port ${PORT}`);
});
