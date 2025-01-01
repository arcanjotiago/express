const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});


app.get('/status', (req, res) => {
  const msg = {
    "status": 200,
    "message":`Aplication working...`
  };
  res.send(msg)
});

app.post('/calcnumber', (req, res) => {
  const reqNumber = Number(req.query.number);

  const apiResponse = {
    Number: reqNumber,
    PreviousNumber: (reqNumber - 1),
    NextNumber: (reqNumber + 1)
  }; 

  res.send(apiResponse);
});

app.post('/checkmail', (req, res) => {
  const regEx = new RegExp(/^[\a-z-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const email = req.query.email;
  
  if(regEx.test(email)){
    return res.json({
      "status": 200,
      "message":`The email informed is valid!`
    });
  };

  return res.json({
    "status": 200,
    "message":`The email informed is invalid. Please, send a valid email!`
  });
});