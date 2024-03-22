package com.Kessel.fullstackbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id // Specifies the primary key of an entity.
    @GeneratedValue // Provides for the specification of generation strategies for the values of primary keys.
    private Long id;
    private String username;
    private String name;
    private String email;
    // Standard getters and setters for each field.
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    
}
