const asyncHandler = require("express-async-handler");

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        date: new Date().toLocaleDateString('en-PH'),
        time: new Date().toLocaleTimeString('en-PH')
    },
    {
        text: "Hello World!",
        user: "Charles",
        date: new Date().toLocaleDateString('en-PH'),
        time: new Date().toLocaleTimeString('en-PH')
    }
];

const getMessages = asyncHandler(async (req, res) => {
    res.render("index", { title: "Messageboard 💬", messages: messages });
});

const createMessageForm = asyncHandler(async (req, res) => {
    res.render("form");
});

const createMessage = asyncHandler(async (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, date: new Date().toLocaleDateString('en-PH'), time: new Date().toLocaleTimeString('en-PH') });
    res.redirect("/");
});

module.exports = { getMessages, createMessageForm, createMessage };