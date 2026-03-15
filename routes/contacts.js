const express = require ('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

/*router.get('/', (req, res) => {
  res.send('Contacts route working');
});*/

router.get('/', 
  /*  #swagger.tags = ['Contacts']
      #swagger.description = 'Get all contacts'*/
      contactsController.getAll);


router.get('/:id', 
  /*  #swagger.tags = ['Contacts by Id']
      #swagger.description = 'Get single contact'*/
  contactsController.getSingle);
router.post('/', 
  /*  #swagger.tags = ['Create a Contact']
      #swagger.description = 'Create a new contact'*/
 contactsController.createContact);
router.put('/:id', 
  /*  #swagger.tags = ['Update a Contact']
      #swagger.description = 'Update'*/
  contactsController.updateContact)
router.delete('/:id', 
  /*  #swagger.tags = ['Delete a Contact']
      #swagger.description = 'Delete'*/
  contactsController.deleteContact); 


module.exports = router;