const express = require("express");
const path = require("path");
const morgan = require('morgan');
var cors = require('cors')

const app = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.listen(3000, () => {
  console.log(`listening on port 3000`)
})
