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

const createMessage = asyncHandler(async (req, res) => {
    res.render("index");
});

module.exports = { getMessages, createMessage };