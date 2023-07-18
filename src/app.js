const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
const jogosRoutes = require('./routes/jogosRoutes');

db.connect() ;

app.use(cors());
app.use(express.json());
app.use("/jogos", jogosRoutes);

module.exports = app;