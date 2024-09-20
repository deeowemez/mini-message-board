const express = require('express');

const messagesController = require('../controller/messagesController.js');

const router = express.Router();

router.get('/new', messagesController.createMessage);

router.get('/', messagesController.getMessages);

module.exports = router;