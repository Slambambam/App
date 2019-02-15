module.exports = (app) => {
    app.post('/register', (req, res) => {
        res.send({
          message: `Hello ${req.body.email} ! Your email was registered! Have fun!`
        })
      })
}
