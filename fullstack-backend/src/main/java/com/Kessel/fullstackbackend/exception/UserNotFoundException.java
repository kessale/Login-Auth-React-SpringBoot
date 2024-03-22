package com.Kessel.fullstackbackend.exception;

// Custom exception class for handling cases where a user is not found
public class UserNotFoundException extends RuntimeException{

    // Constructor that accepts a user ID and constructs the exception message
    public UserNotFoundException(Long id){
        super("Could not find the user with id " + id);
    }
    
}
