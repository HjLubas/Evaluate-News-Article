//dotenv API key config
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

//server variables
const path = require('path')
const express = require('express')
const cors = require('cors');
const fetch = require('node-fetch');
const app = express()

//instantiate dependents
app.use(cors());
app.use(express.static('dist'))
app.use(express.json());
console.log(__dirname)


app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//meaningcloud api fetch
app.post('/api', async (req, res) => {

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
        sentiments: meaningCloud_data,
        agreement: meaningCloud_data.agreement,
        subjectivity: meaningCloud_data.subjectivity,
        confidence: meaningCloud_data.confidence,
        irony: meaningCloud_data.irony
    }
    res.json(newEntry);
})
