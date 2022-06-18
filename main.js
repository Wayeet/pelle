const ex = require('express')
const app = ex()
const cors = require('cors')

app.use(
    cors({
        origin: "*"
    })
)

app.get("/satz", (req, res) => {
    res.json({name: "bjoern", geil: true})
})


app.get('/wort/:wort', (req, res) => {
    return res.send(req.params.wort)
  });


app.listen(8090)
