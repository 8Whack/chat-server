const express = require('express');
const controller = require('./controllers/messages_controller');

const app = express();

app.use(express.json());
app.use(express.static(__dirname+'/../public/build'));

const url = '/api/messages';
app.get(url, controller.read);
app.post(url, controller.create);
app.put(`${url}/:id`, controller.update);
app.delete(`${url}/:id`, controller.delete);



const port = 3001;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
});