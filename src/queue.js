require("dotenv").config({ path: "../.env" });
const QueueManager = require("./libs/QueueManager");

QueueManager.processQueue();

module.exports = QueueManager;
