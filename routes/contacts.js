const express = require ('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

/*router.get('/', (req, res) => {
  res.send('Contacts route working');
});*/

router.get('/', contactsController.getAll);


router.get('/:id', contactsController.getSingle);

module.exports = router;