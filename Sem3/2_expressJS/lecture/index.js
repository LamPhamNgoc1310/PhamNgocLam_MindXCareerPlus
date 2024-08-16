import express from 'express';
const app = express();

app.get('/users', async (req, res) => {
    let result = await fetch('localhost:3000/users');
    let resultJson = await result.json();
    res.send(resultJson);
})



// ask: CRUD
// Read: .get
// Update: .update
// Delete: .delete