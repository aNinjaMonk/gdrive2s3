const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const BASE_URL = "https://www.googleapis.com/drive/v3";
const access_token = process.env.ACCESS_TOKEN;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

app.get('/', (req,res) => {
  res.send('hello');
});

app.get('/trigger', (req, res) => {
  axios.get(BASE_URL + '/about', {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  })
    .then((res) => console.log(JSON.stringify(res)))
    .catch((err) => console.log(err));
  res.send('trigger');
});


// 4/0ARtbsJpk2Ren019B0C43Mab01CnUgnhiXgG87JLmpH28YHfkxaaHe2eS6H_6B7_e6egKvw
//
