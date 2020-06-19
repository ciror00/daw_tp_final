var PORT=3000;
var express = require('express');
var PORT=3000;
var express = require('express');
var app = express();
var mysql = require('./mysql');
app.use(express.json()); // para parsear application/json
app.use(express.static('.')); // para servir archivos estaticos


app.get('/devices', function(req, res, next) {
    var tipo = '';
	/*
		Se crea un switch con las diferentes opciones de la QUERY
	*/
    switch (req.query.filter)
    {
        case '0':
            tipo = ' WHERE type=0';
            break;
        case '1':
            tipo = ' WHERE type=1';
            break;   
        default:
            break;
    }

    mysql.query('SELECT * FROM Devices ' + tipo , function (err, rta, field) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(rta).status(200);
    });
});

app.post('/devices', function(req, res, next) {

    console.log(req.body);

    st=0;
    if(req.body.state)
        st=1;

    id = req.body.id.split("_")[1]; // viene dev_xx

    mysql.query('UPDATE Devices SET state=? WHERE id=?', [st, id], function(err, rta, field) {
        if (err) {
            res.send(err).status(400);server
            return;
        }
        res.send(JSON.stringify(req.body));
    });
});


app.listen(PORT, function(req, res) {
    console.log("API funcionando en el puerto "+PORT);
});