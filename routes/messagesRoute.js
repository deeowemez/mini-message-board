const express = require('express');

const messagesController = require('../controller/messagesController.js');

const router = express.Router();

router.get('/', messagesController.getMessages);

router.get('/new', messagesController.createMessageForm);

router.post('/new', messagesController.createMessage);

module.exports = router;