package com.Kessel.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Kessel.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    // Interface for the repository that extends JpaRepository, providing CRUD operations for the User entity.
}
