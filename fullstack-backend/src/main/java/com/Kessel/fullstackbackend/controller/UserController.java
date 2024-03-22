package com.Kessel.fullstackbackend.controller;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Kessel.fullstackbackend.exception.UserNotFoundException;
import com.Kessel.fullstackbackend.model.User;
import com.Kessel.fullstackbackend.repository.UserRepository;
import org.springframework.web.bind.annotation.RequestParam;
// Mark this class as a REST controller to handle HTTP requests
@RestController
// Allow cross-origin requests from the specified frontend server
@CrossOrigin("http://localhost:3000")
public class UserController {

    // Inject UserRepository to interact with the database
    @Autowired
    private UserRepository userRepository;

    // Handle POST request to create a new user
    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        // Save the new user to the database and return the saved entity
        return userRepository.save(newUser);
    }

    // Handle GET request to retrieve all users
    @GetMapping("/users")
    List<User> getAllUsers() {
        // Fetch all users from the database
        return userRepository.findAll();
    }

    // Handle GET request to retrieve a user by ID
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        // Find the user by ID, throw UserNotFoundException if not found
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    // Handle PUT request to update a user
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        // Find the user by ID and update their information, throw UserNotFoundException if not found
        return userRepository.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            // Save the updated user information
            return userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }

    // Handle DELETE request to delete a user by ID
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            // If the user doesn't exist, throw UserNotFoundException
            throw new UserNotFoundException(id);
        }
        // Delete the user by ID
        userRepository.deleteById(id);
        // Return a success message
        return "User with id " + id + " has been deleted successfully";
    }
}
