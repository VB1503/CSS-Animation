const dataToSend = { message: 'Hello from frontend!' };

fetch('http://localhost:8000/api/send-data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
})
.then(response => response.json())
.then(data => {
    console.log('Response from backend:', data);
})
.catch(error => {
    console.error('Error:', error);
});
