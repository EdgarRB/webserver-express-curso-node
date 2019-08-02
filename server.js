const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

/*El hbs permite lo mismo que los JSP´s en java y los cshtlm con .net, meter logica del back en el html */
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'edgar'
    });

})

app.get('/about', (req, res) => {
    res.render('about');

})

// app.get('/data', (req, res) => {
//     res.send('Hola data')
// })


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puesto ${port}`);
});