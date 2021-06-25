const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

// var textapi = new meaningcloud({
//     application_key: process.env.API_KEY
//  });

var path = require('path')
const express = require('express')
const cors = require('cors');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(cors());
app.use(express.static('dist'))
app.use(express.json());
console.log(__dirname)


// app.post('/api', (request, response) => {
//     const data = request.body;
//     // const apiData = { data };
//     console.log(data);
//     response.json(data);
// })
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test',  async(req, res) => {

    const apiURL_start = 'https://api.meaningcloud.com/sentiment-2.1?key=';
    const textapi = process.env.API_KEY;
    const data = req.body.formText;
    const apiURL_mid = '&of=json&lang=en&url=';
    const response = await fetch(apiURL_start + textapi + apiURL_mid + data);
    const meaningCloud_data = await response.json();
    console.log(meaningCloud_data);
    newEntry = {
        status: 'succesful',
        url_analyzed: data,
        sentiments: meaningCloud_data
    }
    res.json(newEntry);
})
