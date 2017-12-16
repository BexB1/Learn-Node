const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const bex = { name: "Bex", age: "Definitely not 30.", cool: true };
  // res.send(bex);
  // res.json(req.query);
  res.render('hello', )
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
