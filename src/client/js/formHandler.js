async function handleSubmit(event) {
    event.preventDefault();
    const link = document.getElementById('link');
    const subjectivity = document.getElementById('subjectivity');
    const confidence = document.getElementById('confidence');
    const irony = document.getElementById('irony');
    // check what text was put into the form field
    const formText = document.getElementById('name').value;
    Client.checkForName(formText)
    const data = { formText };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    console.log("::: Form Submitted :::");
    const response = await fetch('http://localhost:8081/test', options);
    const json = await response.json();
    link.innerHTML = `<p><a href="` + json.url_analyzed + `">` + json.url_analyzed +`</a></p>`;
    subjectivity.innerHTML = json.sentiments.subjectivity;
    confidence.innerHTML = json.sentiments.confidence;
    irony.innerHTML = json.sentiments.irony;
    console.log(json);
    // formText.value = "";
    // fetch('http://localhost:8081/test', options)
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementById('results').innerHTML = res.message
    //     })
};




export { handleSubmit }
// const inputText = document.getElementById('name').value;

// const data = { inputText };
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// };
// const response = await fetch('/api', options);
// const json = await response.json();
// console.log(json);