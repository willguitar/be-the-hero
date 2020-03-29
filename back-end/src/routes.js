const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();


// methods sessão
routes.post('/sessions' , SessionController.create);

// methods ong
routes.get('/ongs', OngController.index);
routes.post('/ongs' , OngController.create);


// methods incidents
routes.post('/incidents' , IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id' , IncidentController.delete);

// methods profile
routes.get('/profile' , ProfileController.index);

module.exports = routes;