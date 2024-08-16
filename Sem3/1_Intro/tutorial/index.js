// import express from 'express';
// const app = express();

// app.listen(8080, () => {
//     console.log('Server is running!');
// });

import http from 'http';
const app = http.createServer((request, response) => {
    const data = { school: 'MindX technology school' };
    response.end(JSON.stringify(data));

    const endpoint = request.url;
    response.end(`Endpoint is ${endpoint}`);
});

app.listen(8080, () => {
    console.log('Server is running!');
});

// ask: routing