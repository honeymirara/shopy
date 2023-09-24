const mongoose = require('../db');
const User = require('../schemas/dbUserSchemas')

async function registrationUserDB(name, surname, email, password) {
  
    const user = new User({
      name,
      surname,
      email,
      password,
    });

    const savedUser = await user.save();
    return savedUser;
}

async function getUserByEmailDB(email) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      console.error('Error getting user by email:', error);
      throw error;
    }
  }


    module.exports = {registrationUserDB, getUserByEmailDB}