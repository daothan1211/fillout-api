const express = require('express')
bodyParser = require('body-parser')
const { filterForm } = require('./controllers/formController')
const { validate } = require('./middlewares/validator')

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * The method to get question response
 */
app.get('/:formId/filteredResponses', validate('formRequest'), filterForm)

//* Error Handler
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
});

app.listen(port, () => {
  console.log(`Fillout app listening on port ${port}`)
})