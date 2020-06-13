const app = require('fastify')()

app.get('/mem/literal', require('./lib/memleak-literal'))
app.get('/mem/class', require('./lib/memleak-class'))
app.get('/cpu/:str', require('./lib/redos'))
app.get('/async', require('./lib/async'))

const schema = {
  schema: {
    response: {
      200: {
        type: 'string'
      }
    }
  }
}

app.get('/', schema, (req, res) => {
  res.send('ok')
})

app.listen(3001, (err) => {
  console.log('Starting listening...')
})
