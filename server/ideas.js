const express = require('express');

const{ getAllFromDatabase, getFromDatabaseById, addToDatabase,
updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} =
 require('./db');

ideasRouter = express.Router();

ideasRouter.param('ideaId', (req, res, next, id) => {
  const minion = getFromDatabaseById('ideas', id);
  if (idea) {
    req.idea = idea;
    next();
  }
  else {
    res.status(404).send();
  }
});

//get all ideas
ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

//create a new minion and save it to the addToDatabase
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    res.status(201).send(addToDatabase('ideas', req.body));
});

//to get a single minion by id
ideasRouter.get('/:ideaId', (req, res, next) => {
  res.send(getFromDatabaseId('ideas',req.param.id));
});

//to update a single minion by id
ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
  let updatedMinionInstance = updateInstanceInDatabase('ideas', req.body);

  res.send(updatedMinionInstance);
});

//to delete a single minion by id
ideasRouter.delete('/:ideaId', (req, res, next) => {
  let updatedMinionInstance = deleteFromDatabasebyId('ideas', req.body.id);

  if (updatedMinionInstance) {
    res.status(204);
  }
  else {
    res.status(500);
  }
  res.send();
});

module.exports = ideasRouter;
