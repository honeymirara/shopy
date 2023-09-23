const mongoose = require('../db');
const User = require('../schemas/dbSchemas');

async function createUserDB(name, surname, email, password) {
  
    const user = new User({
      name,
      surname,
      email,
      password,
    });
    
    const savedUser = await user.save();
    return savedUser;
 
}

async function getAllUsersDB() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
}

async function getUserByIdDB(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error('Error getting user by ID:', error);
    throw error;
  }
}

async function updateUserByIdDB(id, updatedData) {
  try {
    const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
    return user;
  } catch (error) {
    console.error('Error updating user by ID:', error);
    throw error;
  }
}

async function deleteUserByIdDB(id) {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    console.error('Error deleting user by ID:', error);
    throw error;
  }
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

module.exports = {
  createUserDB,
  getAllUsersDB,
  getUserByIdDB,
  updateUserByIdDB,
  deleteUserByIdDB,
  getUserByEmailDB,
};
