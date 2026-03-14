const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('I am learning');
});

router.use('/contacts', require('./contacts'));


module.exports = router;