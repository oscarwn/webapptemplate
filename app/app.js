const express = require('express');
const Datastore = require('nedb');
const port = 8080;
const app = express()

app.listen(port,() => console.log(`listening at port ${port}`));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))

const database = new Datastore('database/database.db');
database.loadDatabase();

app.get('/api', (request,response)=>{
    database.find({}, (error, data) => {
        if (error){
            response.end();
            return;
        }
        response.json(data);
    });
});

app.post('/api', (request,response)=>{
    const data = request.body;
    const timestamp=Date.now();
    
    data.timestamp=timestamp;

    database.insert(data);
    response.json(data);
});