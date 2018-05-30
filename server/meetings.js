const express = require('express');

meetingsRouter = express.Router();

const{ getAllFromDatabase, addToDatabase, deleteAllFromDatabase,
createMeeting} = require('./db');

//get all meetings
meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
});

//create a new meeting and save it to the addToDatabase
meetingsRouter.post('/', (req, res, next) => {
  res.status(201).send(createMeeting());
});

//delete all meetings
meetingsRouter.delete('/', (req, res, next) => {
   res.(204).send(deleteAllFromDatabase('meetings'));
});

module.exports = meetingsRouter;
