package com.Kessel.fullstackbackend.exception;

import java.util.Map;
import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

// Marks this class as a controller advice to handle exceptions globally
@ControllerAdvice
public class UserNotFoundAdvice {

    // Marks this method to respond to UserNotFoundException with a custom response body and HTTP status
    @ResponseBody
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(UserNotFoundException exception){
        // Create a map to hold the error message
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());
        // Return the error message
        return errorMap;
    }
}