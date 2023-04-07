const express = require('express');

const {
    homeView, 
    formView, 
    formSubmission ,
    getAllUsers,
    editUser,
    updateUser,
    deleteUser
} = require('../controllers/userController'); 

const router = express.Router();

router.get('/', homeView);

router.get('/form', formView);
router.post('/form', formSubmission);

router.get('/user-list', getAllUsers);

router.get('/edit-user/:id', editUser);
router.post('/edit-user/:id', updateUser);

router.post('/delete-user/:id',deleteUser )

module.exports = router;

