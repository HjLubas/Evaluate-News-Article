async function handleSubmit(event) {
    event.preventDefault();

    const results = document.getElementById('results');

    // check what text was put into the form field
    let formText = document.getElementById('name').value;

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
            <p> Link:  <a href="${json.url_analyzed}">${json.url_analyzed}</a></p>
            <p> Agreement: ${json.agreement}</p>
            <p> Subjectivity:  ${json.subjectivity}</p>
            <p> Confidence:  ${json.confidence}</p>
            <p> Irony:  ${json.irony}</p>`;

            results.innerHTML = analysis;
            console.log(json);
        } catch (error) {
            console.log("error", error);
        }

    } else {
        alert('Please enter a valide web link/address!-- example: https://www.example.com');
    }

    document.getElementById('name').value = '';
};


export { handleSubmit }