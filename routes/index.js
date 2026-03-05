const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('I am impresionante');
});

module.exports = router;