// Nima Azadikhah
//StI: 100834828
// Lab4
//Date: 21/04/2023



// this is a  helper to the controller
// express object
const express = require('express');

// Import the animal controller functions
const {homeView,formView,formSubmission,getAllAnimals,editAnimal,updateAnimal,deleteAnimal} = require('../controllers/animalController');
// Create a new Express router
const router = express.Router();

router.get('/', homeView);
// Route for displaying the animal entry form
router.get('/entry-form', formView);
// Route for submitting the animal entry form
router.post('/entry-form', formSubmission);
// Route for displaying all animals form
router.get('/all-animals', getAllAnimals);
// Route for displaying the edit animal form
router.get('/edit-animal/:id', editAnimal);
router.post('/edit-animal/:id', updateAnimal);

router.post('/delete-animal/:id',deleteAnimal )


module.exports = router;

