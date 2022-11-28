const app = require('express')();
app.use(cors());
app.use(express.json());

app.use("/pethouse", routes);

module.exports = app;