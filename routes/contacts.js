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
      #swagger.description = 'Get single contacts'*/
  contactsController.getSingle);
router.post('/', 
  /*  #swagger.tags = ['Contacts']
      #swagger.description = 'Create a new contact'*/
 contactsController.createContact);
router.put('/:id', 
  /*  #swagger.tags = ['Contacts']
      #swagger.description = 'Update a contact'*/
  contactsController.updateContact)
router.delete('/:id', 
  /*  #swagger.tags = ['Contacts']
      #swagger.description = 'Delete a contact'*/
  contactsController.deleteContact); 


module.exports = router;