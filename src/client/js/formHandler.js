async function handleSubmit(event) {
    event.preventDefault();

    //ui variables
    const results = document.getElementById('results');
    // grab what text was put into the form field
    const formText = document.getElementById('name').value;

    //url checker is true, fetch from server, then update ui
    if (Client.is_url(formText)) {
        const data = { formText };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:8081/api', options);
        console.log("::: Form Submitted :::");

        try {
            const json = await response.json();

            const analysis = `
            <div> Link:  <a href="${json.url_analyzed}">${json.url_analyzed}</a></div>
            <div> Agreement: ${json.agreement}</div>
            <div> Subjectivity:  ${json.subjectivity}</div>
            <div> Confidence:  ${json.confidence}</div>
            <div> Irony:  ${json.irony}</div>`;

            results.innerHTML = analysis;
            console.log(json);
        } catch (error) {
            console.log("error", error);
        }
    //url checker is false, alert message
    } else {
        alert('Please enter a valide web link/address! -- example: https://www.example.com');
    }
    //clear the input box
    document.getElementById('name').value = '';
};


export { handleSubmit }