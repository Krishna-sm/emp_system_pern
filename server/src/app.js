const express = require('express');
const db = require('./config/db.config');
const { TestTable } = require('./db/schema');
const app = express()
const port = 3000

app.get('/', async(req, res) => {

      const name = "Krishna";

     await db.insert(TestTable).values({
        name
      })

  res.send({msg:'Hello World!'})
})


module.exports = app