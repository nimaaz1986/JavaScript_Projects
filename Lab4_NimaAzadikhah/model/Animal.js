// Nima Azadikhah
//StI: 100834828
// Lab4
//Date: 21/04/2023

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    zoo:{
        type: String, 
        required: true 

    },
    scientificName:{
        type: String, 
        required: true 

    },
    commonName:{
        type: String, 
        required: true
    },
    givenName: { 
        type: String, 
        required: true 
    },
    gender: { 
        type: String, 
        required: true 
    },
    dateOfBirth: { 
        type: Date, 
        required: true 
    },
    age: { 
        type: Number, 
        required: true 
    },
    isTransportable: 
    {
         type: Boolean,
          required: true 
    },


});
const Animal = mongoose.model("Animal", AnimalSchema);
module.exports = Animal;