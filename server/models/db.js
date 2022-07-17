const mongoose = require("mongoose");
const dbURI = "mongodb://localhost/Loc8r";
mongoose.connect(dbURI, { useNewUrlParser: true });
const readLine = require("readline");
if (process.platform === "win32") {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("SIGINT", () => {
    process.emit("SIGINT");
  });
}

//monitors successful connection
mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

//checks for connection errors
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

//checks for disconnection events
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

//captiring the termination events
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

//call this function when the application terminates or when nodemon restarts it
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});

//Sends a message to gracefulShutdown and a callback to exit the Node process

process.on("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});
//Listens for SIGTERM to be emitted when Heroku shuts down the process
process.on("SIGTERM", () => {
  gracefulShutdown("Heroku app shutdown", () => {
    process.exit(0);
  });
});
