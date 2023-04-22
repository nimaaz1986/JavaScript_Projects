// Nima Azadikhah
//StI: 100834828
// Lab4
//Date: 21/04/2023


const mongoose = require('mongoose');
// Controller for rendering the home view
const homeView = (req, res) => {
    pageTitle = "Home Page";
    res.render('index',{
        pageTitle: pageTitle
    });
};
// Import the Animal model
require('../model/Animal');

const Animal = mongoose.model('Animal');

// Controller for rendering the animal entry form
const formView = (req, res) =>{
    pageTitle = 'Registration Form';
    res.render('animals/entry-form', {
        pageTitle: pageTitle
    });
};



// Controller for handling the animal entry form submission
const formSubmission = async (req, res) => {
    console.log(req.body);
    const {
      zoo,
      scientificName,
      commonName,
      givenName,
      gender,
      dateOfBirth,
      age,
      isTransportable,
    } = req.body;

    // Check if the animal with the same scientificName and givenName already exists in the database
    const existingAnimal = await Animal.findOne({ scientificName, givenName });
    
    if (existingAnimal) {
      console.log('Animal exists in DB!');
      pageTitle = 'Already Registered';
      alreadyRegistered = true;
      regMessage = 'You are already registered with that Animal';
      res.render('animals/form-submission', {
        pageTitle: pageTitle,
        alreadyRegistered: alreadyRegistered,
        regMessage: regMessage,
      });
    } else {
      const newAnimal = new Animal({
        zoo,
        scientificName,
        commonName,
        givenName,
        gender,
        dateOfBirth,
        age,
        isTransportable,
      });
      
  
      try {
        await newAnimal.save();
        console.log('Animal saved successfully!');
        pageTitle = 'Registration Successful';
        res.render('animals/form-submission', {
          pageTitle: pageTitle,
          regMessage: 'Animal has been registered successfully!',
        });
      } catch (error) {
        console.error('Error saving animal:', error);
        res.status(500).send('Error saving animal.');
      }
    }
  };

// Controller for fetching and displaying all animals
const getAllAnimals = (req, res ) => {
  pageTile = "All Animal Page"
  Animal.find().lean().then((animals) =>{
      if(animals){
        res.render('animals/all-animals', {
          animals: animals, 
          pageTile: pageTile
        });
        
      }
  });

}
// Controller for fetching and displaying the edit animal form
const editAnimal = (req, res) => {
  let id = req.params.id
  Animal.findOne({_id: id})
  .lean()
  .then((animal) =>{
      res.render('animals/edit-animal',{
          animal: animal,
          id: id
      });
  });
}
// Controller for handling the update of an animal's information
const updateAnimal = async(req, res) =>{
  const update = {zoo: req.body.zoo, }
    const id = req.params.id
    const filter = {_id: id}
    let doc = await Animal.findOneAndUpdate(filter, update, {new:true});
    res.redirect('/all-animals');
};

const deleteAnimal = async (req, res) =>{
  const id = req.params.id
  const filter = { _id: id }
  let deletedCount = await Animal.deleteOne(filter);
  res.redirect('/all-animals');

};
// Export the controller functions
module.exports = {
    homeView,
    formView,
    formSubmission,
    getAllAnimals,
    editAnimal,
    updateAnimal,
    deleteAnimal
};