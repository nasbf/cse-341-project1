const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('I am impresionante');
});

router.use('/contacts', require('./contacts'));
router.get('/', (req, res) => {
  res.send('Contacts API');
});
module.exports = router;