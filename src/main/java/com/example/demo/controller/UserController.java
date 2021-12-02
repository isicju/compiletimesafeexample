package com.example.demo.controller;

import com.example.demo.controller.model.User;
import com.example.demo.controller.model.UserException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

import static java.lang.System.currentTimeMillis;

@RestController
public class UserController {

    @GetMapping("/users/{userName}")
    public ResponseEntity<Object> getUser(@PathVariable("userName") String userName) {
        try {
            return ResponseEntity.ok(createUser(userName));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new UserException(e.getMessage()));
        }
    }

    private User createUser(String userName) {
        if (userName.length() < 3) throw new IllegalArgumentException("name is too short!");
        return new User(userName, new Timestamp(currentTimeMillis()));
    }

}
