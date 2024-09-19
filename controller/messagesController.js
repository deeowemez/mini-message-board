const asyncHandler = require("express-async-handler");

const getMessages = asyncHandler(async (req, res) => {
    res.render("index");
});

const createMessage = asyncHandler(async (req, res) => {
    res.render("index");
});

module.exports = { getMessages, createMessage };