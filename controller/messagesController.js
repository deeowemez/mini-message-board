const asyncHandler = require("express-async-handler");

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const getMessages = asyncHandler(async (req, res) => {
    res.render("index", { title: "Messageboard 💬", messages: messages });
});

const createMessage = asyncHandler(async (req, res) => {
    res.render("index");
});

module.exports = { getMessages, createMessage };